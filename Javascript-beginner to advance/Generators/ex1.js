// Generators Coding ex1:


function* printNums() {


    console.log("stared");
    yield 1;

    console.log("Pehla chal chuka");
    yield 2;

    console.log("dusra chal chuka");
    yield 3;
}


const ans = printNums();

console.log(ans.next().value);

console.log(ans.next().value);

console.log(ans.next().value);


// My Journey Share With Github