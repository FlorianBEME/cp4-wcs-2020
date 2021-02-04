const { connection } = require("../db_connection");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("you need token ");
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "you are not auth" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

router.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("you are conected");
});

router.post("/", (req, res) => {
  const mail_user = req.body.mail_user;
  const user_password = req.body.user_password;
  if (!mail_user || !user_password) {
    res
      .status(400)
      .json({ errorMessage: "Please specify both email and password" });
  } else {
    connection.query(
      "SELECT * FROM user WHERE mail_user = ? ;",
      mail_user,
      (err, result) => {
        if (err) {
          res.status(500).json({ errorMessage: error.message });
        } else if (result.length === 0) {
          res.status(403).json({ errorMessage: "Invalid email" });
        } else if (result.length > 0) {
          bcrypt.compare(
            user_password,
            result[0].user_password,
            (errror, response) => {
              if (response) {
                const user = {
                  id: result[0].id,
                  mail_user,
                  user_password: "hidden",
                };
                const token = jwt.sign(
                  { id: user.id },
                  process.env.ACCESS_TOKEN_SECRET_KEY,
                  {
                    expiresIn: "1h",
                  }
                );


                res.json({ auth: true, token: token, result: result });
              } else {
                res.status(403).json({ errorMessage: "Invalid password" });
              }
            }
          );
        } else {
          res.json({ auth: false, message: "no user exist" });
        }
      }
    );
  }
});

module.exports = router;
