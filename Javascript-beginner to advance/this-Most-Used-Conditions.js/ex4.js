// function inside method(es5) Coding ex4:

var obj2 = {

    sayName: function() {

        console.log(this);
        
        function childfnc() {

            console.log(this);
        }

        childfnc();
    },

    age: 25,
}

obj2.sayName();


// My Journey Share With Github