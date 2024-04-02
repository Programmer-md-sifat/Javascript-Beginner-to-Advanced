function abcd(val, val2, val3) {
    
    console.log(this, val, val2, val3);
}

var obj = { age : 24}

abcd.call(obj, 1, 2, 3);