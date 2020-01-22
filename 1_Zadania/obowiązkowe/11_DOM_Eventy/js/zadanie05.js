document.addEventListener("DOMContentLoaded", function() {
  function changeColor(e) {
    this.style.backgroundColor =
      "#" + Math.floor(Math.random() * 55555).toString(16);
  }

  const divs = document.querySelectorAll(".box");
  for (let item of divs) {
    item.addEventListener("click", changeColor, false);
  }
});
