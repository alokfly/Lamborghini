const app = require("express");
const router = app.Router();
const {
  addBrand,
  getBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/BrandController");
router.post("/addBrand", addBrand);

router.get("/getBrand", getBrand);
router.patch("/updateBrand/:id", updateBrand);
router.delete("/deleteBrand/:id", deleteBrand);

module.exports = router;
