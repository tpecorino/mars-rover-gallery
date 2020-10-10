const axios = require('axios');
const { response } = require('express');

const getRoverImages = async (params) => {
    //const { date } = params
    const date = '2017-6-3';
    const endpoint = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=DEMO_KEY`;

    try {
      const response = await axios.get(endpoint); 
      return response.data.photos;
    } catch (e) {
      throw new Error(e)
    }
  };
  
  module.exports = { getRoverImages };