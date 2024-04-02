// function inside method(es6) Coding ex5:

var obj3 = {

    sayName: function() {

        const child = () => {

            console.log(this);
        }

        child();
    }
}

obj3.sayName();


// My Journey Share With Github