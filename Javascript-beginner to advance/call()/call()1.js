function abcd() {

    console.log(this.age);
}

var obj = {age: 24}
abcd.call(obj)