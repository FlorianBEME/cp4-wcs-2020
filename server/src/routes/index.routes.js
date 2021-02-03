const router = require("express").Router();

const projectRouter = require("./project.routes");
const skillRouter = require("./skill.routes");
const studyRouter = require("./study.routes.js");
const proRouter = require("./pro.routes.js");
const loginRouter = require("./login.routes.js");
const uploadRouter = require("./upload.routes.js");

router.use("/projects", projectRouter);
router.use("/skills", skillRouter);
router.use("/studys", studyRouter);
router.use("/professionals", proRouter);
router.use("/login", loginRouter);
router.use("/upload", uploadRouter);


module.exports = router;
