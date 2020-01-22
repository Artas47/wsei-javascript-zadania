document.addEventListener("DOMContentLoaded", function() {
  function changeColor(e) {
    this.parentNode.style.backgroundColor =
      "#" + Math.floor(Math.random() * 55555).toString(16);
  }

  const buttons = document.querySelectorAll(".button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", changeColor, false);
  }
});
