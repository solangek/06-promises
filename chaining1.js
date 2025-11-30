const fetchData = () => {
    return new Promise((resolve, reject) => {
        console.log("building Promise");
        setTimeout(() => {
            resolve('Promise is Done!');
        }, 1000);
    });
};

console.log('Hello!');

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            //console.log("1:");
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            //console.log("2:");
            console.log(text2);
        });
}, 2000);

// output:
//     Hello!
//     Promise is Done!
//     Promise is Done!


// same code with async/await syntax

setTimeoutAsync(
    async () => {
        console.log('Timer is done!');
        try {
            let text = await fetchData();
            console.log(text);
            let text2 = await fetchData();
            console.log(text2);
        } catch (error) {
            console.error(error);
        }
    }, 2000);
