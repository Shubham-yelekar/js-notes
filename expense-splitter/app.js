import ExpenseUI from "./ui/expenseUI.js";
import UserService from "./services/userServices.js";
import ExpenseService from "./services/expenseServices.js";
import StorageServices from "./services/StorageServices.js";
class ExpenseApp {
  constructor() {
    this.userService = new UserService();
    this.expenseService = new ExpenseService(this.userService);
    this.storageServices = new StorageServices(
      this.expenseService,
      this.userService
    );
    this.ui = null;
  }

  init() {
    try {
      this.ui = new ExpenseUI(
        this.userService,
        this.expenseService,
        this.storageServices
      );
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

window.addEventListener("load", () => {
  if (!expenseApp) {
    expenseApp = new ExpenseApp();
    expenseApp.init();
  }
});
