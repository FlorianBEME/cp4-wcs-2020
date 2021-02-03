const router = require("express").Router();

const projectRouter = require("./project.routes");
const skillRouter = require("./skill.routes");
const studyRouter = require("./study.routes.js");
const proRouter = require("./pro.routes.js");

router.use("/projects", projectRouter);
router.use("/skills", skillRouter);
router.use("/studys", studyRouter);
router.use("/professionals", proRouter);

module.exports = router;
