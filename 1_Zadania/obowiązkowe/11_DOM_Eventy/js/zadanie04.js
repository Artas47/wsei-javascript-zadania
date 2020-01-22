document.addEventListener("DOMContentLoaded", function() {
  function increaseCounter(e) {
    document.querySelector(".counter").innerHTML++;
  }

  const buttons = document.querySelectorAll("body button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", increaseCounter, false);
  }
});
