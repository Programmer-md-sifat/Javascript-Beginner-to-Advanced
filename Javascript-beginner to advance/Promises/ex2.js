// Promise Coding ex2:

const msg = new Promise(function(res, rej) {

    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {

        if(result.results[0].gender === `male`) res();

        else rej();
    });
});


msg

.then(function() {
     
    console.log("hara button dabao");
})

.catch(function() {

    console.log("laal button dabao");
})


// My Journey Share With Github