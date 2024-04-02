// Promise Coding ex3:

function dataFetcher(url) {

    const msg = new Promise(function(res, rej) {

        fetch(url)
        .then(raw => raw.json())
        .then(result => {

            resolve(result);
        })
    })

    return msg;
}

dataFetcher("https://randomuser.me/api/")

.then(function(result) {

    console.log(result);
})


// My Journey Share With Github