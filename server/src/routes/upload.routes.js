const router = require("express").Router();
const fileUpload = require("express-fileupload");
const front = `${__dirname}/../../../client`
const { v4: uuidv4 } = require('uuid');
router.use(fileUpload());

router.post("/", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  

  const file = req.files.file;
  const filename = uuidv4();
  file.name = filename +file.name

  file.mv(`${front}/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName:`/uploads/${file.name}`, filePath: `/uploads/${file.name}` });
  });
});

router.put("/", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${front}/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

module.exports = router;
