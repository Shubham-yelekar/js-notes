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

  static createList(text) {
    if (!text) {
      throw new Error("text not passed");
    }

    const li = document.createElement("li");
    li.textContent = text;
    li.classList = "bg-neutral-200 p-2 ";

    return li;
  }

  static clearElements(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  static appendFragment(parent, items, createItemFn) {
    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      fragment.appendChild(createItemFn(item));
    });
    parent.appendChild(fragment);
  }
}
