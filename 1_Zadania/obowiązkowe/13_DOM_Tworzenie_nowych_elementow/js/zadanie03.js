document.addEventListener("DOMContentLoaded", function() {
  function removeElement(e) {
    this.parentNode.removeChild(this);
  }
  const buttons = document.querySelectorAll("#remove");

  for (let item of buttons) {
    item.addEventListener("click", removeElement, false);
  }
});
