// Spread and Rest Coding Ex:


// Spread Coding Ex:


const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);


// Output: [1, 2, 3, 4, 5, 6]



// Rest Coding Ex:


function abcd(a, b, c, ...d) {

    console.log(a, b, c, d);
}

abcd(1, 2, 3, 4, 5, 6, 7);


// Output:


// My Journey Share With Github