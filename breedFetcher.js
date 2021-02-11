const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // console.log(url);

  request(url, (error, response, body) => {
    // console.log('now inside request');

    if (error) {
      // console.log('got an error');
      callback(error, null);

    } else if (body.length === 2) {
      // console.log('invalid breed');
      callback('Breed not found.', null);

    } else {
      const data = JSON.parse(body);
      // console.log('parsing body...');
      callback(null, data[0]['description']);

    }
  });
};

module.exports = {fetchBreedDescription};