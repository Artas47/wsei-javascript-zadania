sayHello();
function sayHello() {
  console.log("Hello");
}
sayHello();

//powyzej mamy function declaration, są one hoistowane więc mozemy je wywolac przed deklaracja

func();
var func = () => console.log("Hi");
func();

//powyzej mamy function expression
// zadeklarowalismy ją z var czyli
// js zrobi cos takiego:
// var func;
// func();
// var func = () => console.log("Hi");
// func();
//czyli zwroci blad, ze func in not a function
