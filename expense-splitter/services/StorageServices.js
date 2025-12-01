export default class StorageServices {
  constructor(userServices, expenseServices) {
    this.userServices = userServices;
    this.expenseServices = expenseServices;
  }

  exportData() {
    const data = {
      users: this.userServices.getAllUser(),
      expense: this.expenseServices.getAllExpenses(),
      exportDate: new Date.now().ISOString(),
    };
    return data;
  }
}
