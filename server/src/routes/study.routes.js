const { connection } = require("../db_connection");
const router = require("express").Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM study";
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.status(200).json(results);
    }
  });
});

router.post("/", (req, res) => {
  const sql = "INSERT INTO study SET ?";
  connection.query(sql, req.body, (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.status(201).json({ id: results.insertId, ...req.body });
    }
  });
});

router.put("/:id", (req, res) => {
  let sql = "UPDATE study SET ? WHERE id=?";
  connection.query(sql, [req.body, req.params.id], (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      sql = "SELECT * FROM study WHERE id=?";
      connection.query(sql, req.params.id, (err, result) => {
        if (result.length === 0) {
          res
            .status(404)
            .send({ errorMessage: `study with id ${req.params.id} not found` });
        } else {
          res.status(200).json(result[0]);
        }
      });
    }
  });
});

router.delete("/:id", (req, res) => {
  const sql = "DELETE FROM study WHERE id=?";
  connection.query(sql, req.params.id, (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
