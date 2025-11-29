import Expense from "../models/Expense.js";
import UserService from "./userServices.js";

export default class ExpenseService {
  constructor(userService) {
    this.expenses = [];
    this.userService = userService;
  }

  addExpense(paidBy, amount, description) {
    if (!this.userService.hasUSer(paidBy)) {
      throw new Error("The user does not exist");
    }
    const expense = new Expense(paidBy, amount, description);
    this.expenses.push(expense);
    return expense;
  }

  getAllExpenses() {
    return [...this.expenses];
  }

  getExpensesByUser(userName) {
    return this.expenses.filter((expense) => expense.paidBy === userName);
  }

  clear() {
    this.expenses = [];
  }

  simplifyExpenses() {}
}
