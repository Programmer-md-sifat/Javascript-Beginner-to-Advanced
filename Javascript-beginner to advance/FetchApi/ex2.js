// Fetch Api Coding ex1:

fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(readable => console.log(readable.results[0]))


// * Human readable

// My Journey Share With Github