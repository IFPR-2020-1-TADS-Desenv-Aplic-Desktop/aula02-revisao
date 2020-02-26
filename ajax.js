// https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02

axios
  .get(
    'https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02' // eventual problema com CORS
  )
  .then(function(response) {
    // handle success
    console.log(response.data[1].title);
    document.querySelector('.dados').textContent = response.data[1].title;
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .then(function() {
    // always executed
  });
