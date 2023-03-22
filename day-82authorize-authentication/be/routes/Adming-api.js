const { request, response } = require("express");
const express = require("express");
const Users = require("../models/User");
const admin_api_Router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

admin_api_Router.get("/", (request, response) => {
  response.status(200).json({
    data: [],
  });
});

admin_api_Router.post("/register", async (request, response) => {
  const { email, password } = request.body;

  if (email && password) {
    const oldUser = await Users.findOne({ email: email });

    if (oldUser) {
      return response.status(200).json({
        data: "Та аль хэдийн бүртгэлтэй байна 🔴!!!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    Users.create({ email: email, password: hashedPassword })
      .then((data) => {
        response.status(201).json({
          message: "Хэрэглэгч Амжилттай үүслээ",
          email: data.email,
        });
        return;
      })
      .catch((error) => {
        return response.status(500).json({
          success: false,
          error,
        });
      });
  } else {
    return response.status(200).json({
      data: "Хэрэглэгч олдсонгүй 🔴",
    });
  }
});

admin_api_Router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!(email && password)) {
      response.status(400).json({
        message: "Утгуудыг бүрэн оруулна уу 🔴!!!",
      });
      return;
    }

    const user = await Users.findOne({ email });
    console.log(user);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (user && isMatch) {
        const token = jwt.sign(
          { user_id: user._id, email },
          "MySuperDuperPrivateKey",
          {
            expiresIn: "2h",
          }
        );
        return response.status(200).json({
          success: true,
          status: "Amjilttai newterlee",
          data: user,
          token: token,
        });
      } else {
        console.log("Neg ym");
      }
    } else {
      return response.status(400).json({
        success: false,
        status: "Нууц үг, нэр хоорондоо таарахгүй байна",
      });
    }
  } catch (error) {
    console.error("Aldaa garlaa", error);
  }
});

module.exports = admin_api_Router;
