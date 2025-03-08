//This is for exercise 8

fetch('https://jsonplaceholder.typicode.com/posts', 
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        // must convert to Json string before sending
        // payload
        body: JSON.stringify(
            {
                ticker: 'AAPL',
                name: 'APPLE, Inc',
                price: 171.48
            }
        )
    }
)
// obtain the body from the Response object
    .then(response => response.json()) //.json() returns a promise too
    .then(output => console.log(output))