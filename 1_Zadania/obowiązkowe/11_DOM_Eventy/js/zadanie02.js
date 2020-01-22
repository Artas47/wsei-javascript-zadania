document.addEventListener("DOMContentLoaded", function() {
  function showText(e) {
    console.log("Hura! Działa!");
  }
  document.querySelector("#mainBtn").addEventListener("click", showText, false);
});
