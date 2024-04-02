// Closures Coding Ex1:


function counter() {

    var count = 0;
    return function() {

        count++;
        console.log(count);
    }
}

var fnc = counter();

fnc();


// My Journey Share With Github