export function showSuccessToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "bottom",
  }).showToast();
}

export function showErrorToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "bottom",
    style: {
      background: "#e60a0aff",
    },
  }).showToast();
}
