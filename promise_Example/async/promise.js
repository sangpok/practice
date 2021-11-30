const promises = new Promise((resolve, reject) => {
    console.log("doing something...");

    setTimeout(() => {
        // resolve("done!");
        reject(new Error("no network"));
    }, 2000);
})

promises
    .then(value => {
        console.log(value);
    }).catch(e => {
        console.log("Opps!");
});

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, (1000));
});

fetchNumber.then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1);
            }, 1000);
        });
    })
    .then(num => console.log(num));