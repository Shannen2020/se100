fetch('https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast')
    .then(data => data.json()) //.json() returns a promise too
    .then(output => console.log(output))
    // .then(output => console.log(data))