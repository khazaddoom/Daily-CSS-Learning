

// function myFunction() {
//     return new Promise((resolve, reject) => {
//        https.get('https://catfact.ninja/breeds?limit=1', values => resolve(values)).on("error", (err) => {
//         reject("Error: " + err.message);
//       });
//     })
//   }




// myFunction().then(values => console.log(values))

const https = require('https');

let finalData = []

https.get('https://catfact.ninja/breeds?limit=1', (res) => {
  res.on('data', (d) => {
    finalData += d
  });
  res.on('error', (e) => {
    console.error(e);
  })
  res.on('end', ()=> {
      console.log(finalData)
  });
})