import ExpenseUI from "./ui/expenseUI.js";
import UserService from "./services/userServices.js";
import ExpenseService from "./services/expenseServices.js";

class ExpenseApp {
  constructor() {
    this.userService = new UserService();
    this.expenseService = new ExpenseService(this.userService);
    this.ui = null;
  }

  init() {
    try {
      this.ui = new ExpenseUI(this.userService, this.expenseService);
      console.log("Splitter app initialised");
    } catch (error) {
      console.error("failed to init app", error);
    }
  }
}

let expenseApp;

document.addEventListener("DOMContentLoaded", () => {
  expenseApp = new ExpenseApp();
  expenseApp.init();
});
