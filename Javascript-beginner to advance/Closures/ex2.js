// Closures Coding Ex2:


function timer() {
    var a = 12;
    return function() {
        setTimeout(function() {
            console.log(a);
        }, 2000);
    };
}

var ans = timer();
ans();


// My Journey Share With Github