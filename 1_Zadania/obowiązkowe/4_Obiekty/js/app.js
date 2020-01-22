// zadanie 0a

const city = {
  capital: "warsaw",
  population: 123456,
  president: "duda",
  primeMinisters: ["marian", "zbigniew"]
};

console.log(city.capital, city.population, city.president, city.primeMinisters);

//zadanie 0b

const timeMachine = {
  shape: "square",
  model: "B23",
  run: (date, place) => {
    console.log("you were moved to " + date + " in " + place);
  }
};
console.log(timeMachine.shape, timeMachine.model);
timeMachine.run("2080", "warsaw");

//zadanie 1

const book = {
  title: "lord of the rings",
  author: "tolkien",
  numberOfPages: 400
};

console.log(book.title, book.author, book.numberOfPages);

//zadanie 2

const person = {
  name: "artur",
  age: 21,
  sayHello: () => {
    console.log("hello");
  }
};

console.log(person.name, person.age);
person.sayHello();

//zadanie 3

const recipe = {
  title: "placek",
  servings: 1
};
recipe.ingredients = ["string1", "string2"];

console.log(recipe.title, recipe.servings, recipe.ingredients);

// zadanie 6

var spoon = {
  isExist: true
};

var fork = spoon;
fork.isExist = false;

console.log(spoon.isExist);
//nie istnieje, tablice i obiekty są "passed by reference not by value"
