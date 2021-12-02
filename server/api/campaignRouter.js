const express = require("express");

const {
  getCampaigns,
  addCampaign,
} = require("../controllers/campainController");

const router = express.Router();

router.get("/get-campaigns", getCampaigns);
router.post("/add-campaign", addCampaign);

module.exports = router;
