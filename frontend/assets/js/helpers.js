class Helpers {
  formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  showSuccess(message) {
    alert(message);
  }

  showError(message) {
    alert(message);
  }

  loading(show = true) {
    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.style.display = show ? "flex" : "none";
  }
}

export default new Helpers();
