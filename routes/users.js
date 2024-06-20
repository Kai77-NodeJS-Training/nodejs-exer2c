const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const userData = require("./index");
const router = express.Router();

router.get('/users', (req, res, next) => {
    res.render("users", {
        users: userData.users,
        pageTitle: "User List",
        hasUsers: userData.users.length > 0,
    });
});

module.exports = router;