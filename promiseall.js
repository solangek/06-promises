// example for week 7-8
const urls =[
        'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3']

async function fetchAllData(urls) {
    try {
	// create an array of promises by mapping over the urls array and
	// applying the fetch function to each URL
        const fetchPromises = urls.map(url =>
            fetch(url)
            .then(response => response.json())
        );
        const results = await Promise.all(fetchPromises);
        // results contains the resolved values of all the promises, i.e. the JSON data
        console.log(results);
    } catch (error) {
        console.error('Error fetching data:', error);    }
}

fetchAllData(urls);


// fetch syntax:
// function fetchAllData(urls) {
//     const fetchPromises = urls.map(url =>
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//     );
//
//     Promise.all(fetchPromises)
//         .then(results => {
//             console.log(results);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }
//
// fetchAllData(urls);