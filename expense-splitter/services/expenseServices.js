import Expense from "../models/Expense.js";
import UserService from "./userServices.js";

export default class ExpenseService {
  constructor(userService) {
    this.expenses = [];
    this.userService = userService;
  }

  addExpense(paidBy, amount, description) {
    if (!this.userService.hasUser(paidBy)) {
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

  splitExpenses() {
    // Total amount
    const userCount = this.userService.getUserCount();
    if (userCount === 0) {
      return [];
    }
    // who owes money to whom
    const net = {};
    const userNames = this.userService.getAllUserNames();

    userNames.forEach((name) => {
      net[name] = 0;
    });
    // match
    this.expenses.forEach((expense) => {
      const share = expense.amount / userCount;

      userNames.forEach((name) => {
        if (name === expense.paidBy) {
          net[name] += expense.amount - share;
        } else {
          net[name] -= share;
        }
      });
    });
    return this.calculateSettlement(net);
  }

  calculateSettlement(net) {
    const result = [];
    const names = Object.keys(net).filter((name) => Math.abs(net[name]) > 0.01);
    // taking all the names on an array
    // filter them to remove the 0 balance names

    names.sort((a, b) => net[a] - net[b]); // sort them from least owed to most owed

    let i = 0; // starting
    let j = names.length - 1; // end

    while (i < j) {
      // While starting point and ending dont cross
      const creditor = names[j];
      const debtor = names[i];

      const settlement = Math.min(-net[debtor], net[creditor]);

      if (settlement > 0.01) {
        net[debtor] += settlement;
        net[creditor] -= settlement;
        result.push(`${debtor} owes ${creditor} ₹${settlement.toFixed(2)}`);
      }
      if (Math.abs(net[debtor] < 0.01)) i++;
      if (Math.abs(net[creditor] < 0.01)) j--;
    }
    console.log(result);

    return result;
  }
}
