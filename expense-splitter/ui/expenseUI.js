import DOMHelper from "./DomHelper.js";
import { showSuccessToast, showErrorToast } from "../utils/toastUtils.js";
export default class ExpenseUI {
  constructor(userService, expenseServices) {
    this.userService = userService;
    this.expenseServices = expenseServices;
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
    };
  }

  bindEvents() {
    this.element.addUserForm.addEventListener("submit", (e) => {
      this.handleAddUser(e);
    });
  }

  handleAddUser(e) {
    e.preventDefault();
    try {
      // get the user provider name
      const name = this.element.userInput.value.trim();
      // check the name given
      if (!name) {
        throw new Error("user name invalid");
      }
      // use the user services to add the user
      const user = this.userService.addUser(name);
      this.addUserToSelect(user.name);
      // Reset the form
      this.element.addUserForm.reset();
      console.log(`User name : ${user.name}`);
    } catch (error) {
      console.error("Error adding User", error);
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
}
