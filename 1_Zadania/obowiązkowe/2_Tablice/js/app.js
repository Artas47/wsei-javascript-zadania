/// ZADANIE 0
function distFromAvarage(tab) {
    let sum = 0;
    for(let x of tab){
        sum= sum + x;
    }

    let y = sum/tab.length;

    let tab2= [];
    for(let v of tab){
        tab2.push(y - v)
    }
    console.log(tab2);
}

distFromAvarage([1,2,3,4,5,6,7])



/// ZADANIE 1
const fruits = ['banana', 'strawberry', 'ananas'];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

for(var i = 0; i<fruits.length; i++){
    console.log(fruits[i])
}


// ZADANIE 3 

function printTable(tab){

    for(let i = 0; i<= tab.length ; i++){
        console.log(tab[i])
    }
}

printTable([1,2,3,4])


// ZADANIE 4

function multiply(tab){
    var sum= 1;
    for(let i = 0; i<= tab.length ; i++){
        sum = sum * tab[i];
    }
    console.log(sum);

}

multiply([1,2,3,4,5,6,7]);


//ZADANIE 5

function getEvenAvarage(arr) {
    var sum = 0;
    let found = 0;
    for(let i of arr){
        if(i % 2 ==0){
            sum = sum + i;
            found++;
        }
    }
    const avg = sum/found;
    console.log(found == 0 ? null:avg)
    return found == 0 ? null: avg
}

getEvenAvarage([1,2,3,4,5,6]);
