export default class DOMHelper {
  static getElementById(id) {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Element ${id} not found`);
    }

    return element;
  }

  static createOption(text, value) {
    return new Option(text, value);
  }
}
