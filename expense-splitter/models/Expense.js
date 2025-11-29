export default class Expense {
  constructor(paidBy, amount, description = "No Descriptions") {
    if (!paidBy || typeof paidBy !== "string") {
      throw new Error("PaidBy must be a non-empty string");
    }
    if (!amount || typeof amount !== "number" || amount <= 0) {
      throw new Error("amount must be a number");
    }
    if (!description || typeof description !== "string") {
      throw new Error("description must be a non-empty string");
    }

    this.paidBy = paidBy.trim();
    this.timeStamp = new Date().toISOString();
    this.amount = parseFloat(amount.toFixed(2));
    this.description = description;
    this.id = this.generateId();
  }

  generateId() {
    return crypto.randomUUID();
  }
}
