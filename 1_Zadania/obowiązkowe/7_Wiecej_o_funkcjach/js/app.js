/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//daklarujemy funkcje
function jeden() {
  //deklarujemy zmienna1 i przypisujemy wartosc
  var zmienna1 = 1;

  //deklaturemy druga funkcje
  function dwa() {
    //console logujemy zmienna1
    console.log(zmienna1);

    //deklarujemy zmienna2 i przypisujemy wartosc
    var zmienna2 = 3;
  }

  //wywolujemy funkcje dwa
  dwa();

  //console logujemy zmienna 2
  // ale zmienna 2 jest zadeklrowana przez var i dlatego jest function scoped
  // dlatego nie jest tutaj dostepna
  console.log(zmienna2);
}

//wywolanie funkcji jeden
jeden();
