document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector("#menu");
  var paragraf = document.querySelector("p");

  menu.classList.add("menu");
  paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});
/*
1
występuje błąd Uncaught TypeError: Cannot read property 'classList' of null
poniewaz kiedy skrypt jest czytany nie istnieje szukany element
dlatego zawsze script tag najlepiej dac przed </body>

2
po stworzeniu eventu wszystko dziala poprawnie

3
nie ma różnicy
*/
