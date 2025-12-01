/*
Explanations:


 */
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

/*
output:
Hello!
Timer is done!
building Promise
Promise is Done!
building Promise
Promise is Done!

Hello! prints immediately (synchronous code)
2-second timer starts but doesn't block - code continues
After 2 seconds: Timer is done! prints
First fetchData() call:
    building Promise prints (Promise constructor runs immediately)
    Waits 1 second (setTimeout inside Promise)
    Promise is Done! prints (Promise resolves)
Second fetchData() call (from .then()):
    building Promise prints again
    Waits another 1 second
    Promise is Done! prints again

Total timeline:
0s: Hello!
2s: Timer is done!
2s: building Promise (first)
3s: Promise is Done! (first)
3s: building Promise (second)
4s: Promise is Done! (second)

The operations are chained - the second fetchData() doesn't start
until the first one completes, which is why you see the pattern twice.
 */
