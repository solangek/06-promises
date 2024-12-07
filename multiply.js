function multiply(a) {
    console.log(a);
    if (a > 16)
        throw `a is higher than 16`;
        // return Promise.reject (new Error(`a is higher than 16`));

    return Promise.resolve(a*a);
}
Promise.resolve(2) // Returns a fulfilled promise with value 2 
    .then(multiply) // console.log(2); Promise fulfilled, returns 4;
    .then(multiply) // console.log(4); Promise fulfilled, returns 16
    .then(multiply) // console.log(16); Promise fulfilled, returns 256
    .then(multiply) // console.log(256); Promise rejected, throws `a is higher than 16`
    .then(multiply) // not reached
    .catch(error => {console.log(`Caught: ${error}`); return 3;}) //Catches error ‘a is higher than 16’ and returns 3
    .then(multiply) // console.log(3); Promise fulfilled, returns 9
    .then(console.log) //console.log(9); Promise fulfilled, returns void/undefined

// same code using async/await syntax
async function multiplyAsync(a) {
    console.log(a);
    if (a > 16)
        throw `a is higher than 16`;
    return a*a;
}

(async () => {
    try {
        let a = await multiplyAsync(2); // console.log(2); a = 4
        a = await multiplyAsync(a); // console.log(4); a = 16
        a = await multiplyAsync(a); // console.log(16); a = 256
        a = await multiplyAsync(a); // console.log(256); a = 256
        a = await multiplyAsync(a); // not reached
    } catch (error) {
        console.log(`Caught: ${error}`);
        a = 3;
    }
    a = await multiplyAsync(a); // console.log(3); a = 9
    console.log(a); // console.log(9);
})();