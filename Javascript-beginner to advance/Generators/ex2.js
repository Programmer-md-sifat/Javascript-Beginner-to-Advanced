// Generators Coding ex2:

function* allNums() {

    for (let i = 1; i < 11; i++) {

        yield i;
    }
}

const gen = allNums();

console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);


// My Journey Share With Github