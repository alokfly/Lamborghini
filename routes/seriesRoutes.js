const app = require("express");
const router = app.Router();
const {
  addSeries,
  getSeries,
  updateSeries,
  deleteSeries,
} = require("../controllers/SeriesController");

router.post("/addSeries", addSeries);
router.get("/getSeries", getSeries);
router.patch("/updateSeries/:id", updateSeries);
router.delete("/deleteSeries/:id", deleteSeries);

module.exports = router;
