//This is for exercise 6 and 7

// fetch earnings of MSFT
// fetch default is GET request
fetch('https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=06ZLYESY14WVORV8')
// obtain the body from the Response object
    .then(data => data.json()) //.json() returns a promise too
    .then(body => {
        const annualEarnings = body["annualEarnings"]
        for (let i=0; i<annualEarnings.length; i++) {
            const current = annualEarnings[i]
            if (current['fiscalDateEnding'].includes("2020")){
                console.log(current['reportedEPS'])
                return
            }
        }
    })

