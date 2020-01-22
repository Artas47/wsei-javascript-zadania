document.addEventListener("DOMContentLoaded", function() {
  function windowSize(e) {
    document.querySelector("#windowWidth").innerHTML = e.target.innerWidth;
    document.querySelector("#windowHeight").innerHTML = e.target.innerHeight;
  }
  window.addEventListener("resize", windowSize, false);
});
