import DOMHelper from "./DomHelper.js";
import { showSuccessToast, showErrorToast } from "../utils/toastUtils.js";
export default class ExpenseUI {
  constructor(userService, expenseServices, storageService) {
    this.userService = userService;
    this.expenseServices = expenseServices;
    this.storageService = storageService;
    this.initializeElements();
    this.bindEvents();
    this.initializeSelect();
  }

  initializeElements() {
    this.element = {
      addUserForm: DOMHelper.getElementById("addUserForm"),
      userInput: DOMHelper.getElementById("userInput"),
      addExpenseForm: DOMHelper.getElementById("addExpenseForm"),
      paidByInput: DOMHelper.getElementById("paidByInput"),
      expenseAmtInput: DOMHelper.getElementById("expenseAmtInput"),
      expenseDescInput: DOMHelper.getElementById("expenseDescInput"),
      expenseList: DOMHelper.getElementById("expenseList"),
      splitBtn: DOMHelper.getElementById("splitBtn"),
      resultList: DOMHelper.getElementById("resultList"),
      exportBtn: DOMHelper.getElementById("exportBtn"),
    };
  }

  bindEvents() {
    this.element.addUserForm.addEventListener("submit", (e) => {
      this.handleAddUser(e);
    });

    this.element.addExpenseForm.addEventListener("submit", (e) => {
      this.handleAddExpense(e);
    });

    this.element.splitBtn.addEventListener("click", () => {
      this.handleSplitting();
    });

    this.element.exportBtn.addEventListener("click", () => {
      this.handleExport();
    });
  }
  isValidUsername(username) {
    return /^(?![0-9]+$)[A-Za-z0-9_]{3,16}$/.test(username);
  }

  handleAddUser(e) {
    e.preventDefault();
    try {
      // get the user provider name
      const name = this.element.userInput.value.trim();
      // check the name given
      if (!name && !this.isValidUsername(name)) {
        throw new Error("user name invalid");
      }
      // use the user services to add the user
      const user = this.userService.addUser(name);
      this.addUserToSelect(user.name);
      // Reset the form
      this.element.addUserForm.reset();
      showSuccessToast(`${user.name} added as a user`);
    } catch (error) {
      console.error("Error adding User", error);
      showErrorToast(error.message);
    }
  }

  handleAddExpense(e) {
    e.preventDefault();
    try {
      const paidBy = this.element.paidByInput.value.trim();
      const amount = this.element.expenseAmtInput.valueAsNumber;
      const description = this.element.expenseDescInput.value.trim();

      if (!paidBy) {
        throw new Error("Please select a user");
      }

      if (!amount || amount <= 0) {
        throw new Error("Please add valid amount ");
      }
      const expense = this.expenseServices.addExpense(
        paidBy,
        amount,
        description
      );
      // Rensder the expence
      this.renderExpense(expense);
      // Reset form
      this.element.expenseAmtInput.value = "";
      this.element.expenseDescInput.value = "";
      // Toast
      showSuccessToast(`Expense of ${amount} by ${paidBy} added`);
    } catch (error) {
      console.log("error in expense form", error);
      showErrorToast(error.message);
    }
  }

  initializeSelect() {
    const defaultOption = DOMHelper.createOption("Select User", "");
    this.element.paidByInput.add(defaultOption);
  }

  addUserToSelect(name) {
    const option = DOMHelper.createOption(name, name);
    this.element.paidByInput.add(option);
  }

  renderExpense(expense) {
    const text =
      expense.description !== "No Description"
        ? `${expense.paidBy} paid ₹${expense.amount} for ${expense.description}`
        : `${expense.paidBy} paid ₹${expense.amount}`;
    const listItem = DOMHelper.createList(text);

    this.element.expenseList.appendChild(listItem);
  }

  handleSplitting() {
    try {
      const results = this.expenseServices.splitExpenses();
      this.renderResults(results);
    } catch (error) {
      console.log("Erro spiltting expenses", error);
      showErrorToast(error.message);
    }
  }

  renderResults(results) {
    DOMHelper.clearElements(this.element.resultList);
    if (results.length === 0) {
      const noResultsItem = DOMHelper.createList(
        "All expenses are settled!",
        "no-results"
      );
      this.element.resultArea.appendChild(noResultsItem);
      return;
    }

    DOMHelper.appendFragment(this.element.resultList, results, (result) =>
      DOMHelper.createList(result)
    );
  }

  handleExport() {
    try {
      this.storageService.exportData();
      showSuccessToast("exported");
    } catch (error) {
      console.error("export error", error);
    }
  }
}
