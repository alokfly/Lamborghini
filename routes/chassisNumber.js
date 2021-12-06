const app = require("express");
const router = app.Router();
const {
  addChassisNumber,
  getChassisNumber,
  updategetChassisNumber,
  deleteChassisNumber,
} = require("../controllers/ChassisNumberController");

router.post("/addChassisNumber", addChassisNumber);
router.get("/getChassisNumber", getChassisNumber);
router.patch("/updategetChassisNumber/:id", updategetChassisNumber);
router.delete("/deleteChassisNumber/:id", deleteChassisNumber);

module.exports = router;
