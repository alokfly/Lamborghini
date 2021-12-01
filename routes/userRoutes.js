const app = require("express");
const router = app.Router();
const auth = require("../utils/auth");
const {
  register,
  registerValiations,
  login,
  loginValiations,
  getUserDetail,
  updateUserDetail,
  updatePasswordValidations,
  updatePassword,
} = require("../controllers/userController");
router.post("/register", registerValiations, register);
router.post("/login", loginValiations, login);

router.get("/getUserDetail", auth, getUserDetail);
router.patch("/updateUserDetail", auth, updateUserDetail);
router.patch(
  "/updatePassword",
  [auth, updatePasswordValidations],
  updatePassword
);

module.exports = router;
