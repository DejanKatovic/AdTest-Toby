const axios = require("axios");

const Axios = axios.create({
  baseURL: process.env.AWS_API_BASE_URL,
  headers: {
    "X-API-Key": process.env.AWS_API_KEY,
    "content-type": "application/x-www-form-urlencoded",
  },
});

module.exports = { Axios };
