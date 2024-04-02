function abcd(val, val2, val3) {

    console.log(this, val, val2, val3);
}

var obj = { age : 25}

abcd.apply(obj, [1, 2, 3]);