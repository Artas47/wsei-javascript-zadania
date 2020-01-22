document.addEventListener("DOMContentLoaded", function() {
  var homeElement = document.getElementById("home");
  var childElements = document.querySelector(".oferts").children;
  var banner = document.querySelector(".ban");
  var blocks = document.querySelectorAll(".block");
  var links = document.querySelector(".links").children;

  /*
    Poniżej napisz kod rozwiązujący zadania
     */
  //zadanie 0
  function getDatasInfo(elements) {
    const data = [];
    for (let i = 0; i < elements.length; i++) {
      data.push(elements[i].getAttribute("data-color"));
    }
    return data;
  }

  getDatasInfo(links);

  //zadanie 1
  console.log(homeElement);

  for (let item of childElements) console.log(item);

  console.log(banner);

  for (let item of blocks) console.log(item);

  for (let item of links) console.log(item);

  //zadanie 2
  for (let item of blocks) {
    console.log(item.innerHTML);
    console.log(item.outerHTML);
  }

  //inner html zwraca zawartość wewnątrz elementu
  //outer html zwraca zawartość razem z elementem

  blocks.innerHtml = "Nowa wartość diva o klasie blocks";

  //zadanie 3
  const footer = document.querySelector("#mainFooter");
  function getId(element) {
    return element.id;
  }

  getId(footer);

  //zadanie 4
  function getTags(elements) {
    const tagsNames = [];
    for (let item of elements) {
      tagsNames.push(item.tagName);
    }
    return tagsNames;
  }

  getTags(childElements);

  //zadanie 5
  function getClassInfo(element) {
    const classes = [];
    for (let item of element.classList) {
      classes.push(item);
    }
    return classes;
  }

  getClassInfo(banner);

  //zadanie 6
  const liElements = document.querySelectorAll("nav li");
  function setDataDirection(elements) {
    for (let item of elements) {
      if (!item.getAttribute("data-direction")) {
        item.setAttribute("data-direction", "top");
      }
    }
  }
  setDataDirection(liElements);
});
