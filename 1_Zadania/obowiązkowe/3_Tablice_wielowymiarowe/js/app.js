//ZADANIE 0

function checkArray(array) {
    const result = [];
    for(let i =0; i <= array.length -1; i++){
        let bool;
        for(let i1 = 0; i1<=array[i].length -1; i1++){
            if(array[i][i1] % 2 ===0){
                bool= true;
            }
             else {
                 bool = false
                 break;
             }
        }
        result.push(bool);
    }
    return result;
}

checkArray([
    [11,12],
    [42,2],
    [-4,-120],
    [0,0],
    [1,34],
]);



//ZADANIE 1


console.log(task1Array[3][2])
console.log(task1Array[1].length)
console.log(task1Array[4][2])

//ZADANIE 2


for(let i = 0; i<=task2Array.length; i++){
    console.log(task2Array[0][i]); 
}

for(let j = 0; j<task2Array.length; j++){
    console.log(task2Array[j].length); 
}

for(let i = 0; i<=task2Array.length; i++){
    for(i1 = 0; i<=task2Array[i].length; i++){
        console.log(task2Array[i][i1])
    }
}

//ZADANIE 3

function print2DArray(arr){
    for(let i = 0; i < arr.length; i++){
        for(i1 = 0; i1 < arr[i].length; i1++){
            console.log(arr[i][i1])
        }
    }
}

print2DArray([[1,2], [3,4]]);


//ZADANIE 4

const arr = [[1,2], [2,6], [5,4]]

print2DArray(arr);

//ZADANIE 5

function create2DArray(rows, columns){
    let array = [];
    let number = 1;
    for(let i = 0; i <= rows; i++){
        let temp = [];
        for(let j = 0; i<= columns; j++){
            temp.push(number);
            number++;
        }
        array.push(temp);
    }
    return array;
}

create2DArray(4,4);



///

var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
