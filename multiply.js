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
