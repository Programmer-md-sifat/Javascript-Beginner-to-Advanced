// Promises Coding ex1:

var ans = new Promise((res, rej) => {

    if(true) {

        return res();
    }

    else {

        return rej();
    }
});


ans.then(function() {

    console.log("Already Resolved!");
})

.catch(function() {

    console.log("Already Rejected!");
});


// Output: Already Resolved!


// My Journey Share With Github