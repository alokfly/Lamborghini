const app = require("express");
const router = app.Router();
const { contactUs, service } = require("../controllers/PageController");

router.post("/contactUs", contactUs);
router.post("/service", service);

module.exports = router;
