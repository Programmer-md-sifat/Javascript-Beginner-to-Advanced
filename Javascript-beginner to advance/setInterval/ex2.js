// setInterval Coding ex2:

var count = 1;

const humaraInterval = setInterval(function() {

    count++;
    console.log(count);
    if(count === 11) clearInterval(humaraInterval);
}, 1000)


// My Journey Share With Github