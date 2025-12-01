export default class StorageServices {
  constructor(userServices, expenseServices) {
    this.userServices = userServices;
    this.expenseServices = expenseServices;
  }

  exportData() {
    const data = {
      users: this.userServices.getAllUser(),
      expense: this.expenseServices.getAllExpenses(),
      exportDate: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `expenses_${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  importData(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error("No File Selected"));
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (!data.users || !data.expense) {
            throw new Error("Invalid file format");
          }
          this.userServices.importUsers(data.users);
          this.expenseServices.importExpenses(data.expense);
          resolve(data);
        } catch (error) {
          reject(new Error(`Failed to import data: ${error.message}`));
        }
      };

      reader.onerror = () => {
        reject(new Error("Failed to read file"));
      };
      reader.readAsText(file);
    });
  }
}
