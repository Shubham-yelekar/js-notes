export function showSuccessToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "bottom",
  });
}

export function showErrorToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "bottom",
  });
}
