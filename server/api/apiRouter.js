const express = require("express");
const { Router } = require("express");

const validateUserData = require("./middleware/validateUserData");
const validateUser = require("./middleware/validateUser");
const validateToken = require("./middleware/validateToken");
const registrationNewUser = require("./controllers/registrationNewUser");
const signIn = require("./controllers/signIn");
const sendUser = require("./controllers/sendUser");
const logOutUser = require("./controllers/logOutUser");

const router = Router();

router.get("/auth", validateToken, sendUser);

router.use(express.json({ extendet: true }));

router.post("/login", validateUserData, validateUser, signIn);
router.post("/registration", validateUserData, registrationNewUser);
router.delete("/logout", logOutUser);

module.exports = router;
