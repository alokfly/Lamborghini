const app = require("express");
const router = app.Router();

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

var upload = multer({ storage: storage });

const {
  addBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");

router.post("/addBlog", upload.single("myField"), addBlog);
router.get("/getBlog", getBlog);
router.patch("/updateBlog/:id", upload.single("myField"), updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);

module.exports = router;
