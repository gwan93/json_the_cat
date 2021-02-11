const request = require('request');
const args = process.argv.slice(2);
const query = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;


request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  if (error) {
    console.log(`%%%%%%%%%\n${error}\n%%%%%%%%%`);
  } else if (body.length === 2) {
    console.log('Breed not found');
  } else {
    const data = JSON.parse(body);
    console.log(data[0]['description']);
  }
});