const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        console.log("building Promise");
        setTimeout(() => {
            resolve('Promise is Done!');
        }, 1500);
    });
    return promise;
};
setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log("1:");
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log("2:");
            console.log(text2);
        });
}, 2000);

console.log('Hello!');


