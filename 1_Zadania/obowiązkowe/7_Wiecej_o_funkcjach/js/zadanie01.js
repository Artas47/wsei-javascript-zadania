/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklarujemy funkcje
function sortArray() {
  //tworzymy tablice liczb
  var points = [41, 3, 6, 1, 114, 54, 64];

  //na tablicy wywolujemy metode sort do sortowania
  points.sort(function(a, b) {
    //zwracamy posortowane wartosci rosnaco
    return a - b;
  });

  //zwrananie tablicy posportowanej
  return points;
}

//wywolanie funkcji
sortArray();
