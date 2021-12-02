const randomString = require("randomstring");
const url = require("url");
const { Axios } = require("../module/axios");

// GET /get-campaigns
// RETURN all campaigns
const getCampaigns = (req, res, next) => {
  Axios.get("/campaigns/*")
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(err);
    });
};

// POST /add-campaign
// @params startDate: number, endDate: number, targetImpressions: number
const addCampaign = (req, res, next) => {
  const params = {
    id: randomString.generate(),
    ...req.body,
  };

  Axios.post("/campaigns", new url.URLSearchParams(params).toString())
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getCampaigns,
  addCampaign,
};
