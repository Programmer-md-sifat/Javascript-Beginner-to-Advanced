// Callback Coding Ex2:

function getData(url, callback) {

    fetch(url)
    .then(raw => raw.json())
    .then(result => {

        callback(result)
    })
}

getData(`https://randomuser.me/api/`, function(result) {

console.log(

    result.results[0].gender,
    result.results[0].email,
    result.results[0].name.first
    )
})


// My Journey Share With Github