// AsyncAwait Coding ex3:


async function dataFetcher(url) {

    let data = await fetch(url);

    let result = await data.json();

    return result;
}

async function hh() {

    let data = await dataFetcher(`https://randomuser.me/api/`);
}

hh();


// My Journey Share With Github