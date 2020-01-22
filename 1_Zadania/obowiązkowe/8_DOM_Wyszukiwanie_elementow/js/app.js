document.addEventListener("DOMContentLoaded", function() {
  /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

  //zadanie 0
  const title = document.getElementsByClassName("title")[0];
  function getDataAnimation(element) {
    let data = title.getAttribute("data-animation");
    return data;
  }
  getDataAnimation(title);

  //zadanie 1
  const home1 = document.getElementById("home");
  console.log(home1);
  const home2 = document.querySelector("#header");
  console.log(home2);
  const liWithAttribute = document.findElementByAttribute("data-direction");
  console.log(liWithAttribute);
  const block = document.querySelector(".block");
  console.log(block);

  //zadanie 2
  const allLiInNav = document.querySelectorAll("nav li");
  console.log(allLiInNav.length);
  const pTags = document.querySelectorAll("div p");
  console.log(pTags.length);
  const divs = document.querySelectorAll("article div");
  console.log(divs.length);

  //zadanie 3
  const article = document.querySelector(".first");
  console.log(document.querySelectorAll(".first h1").length);
});
