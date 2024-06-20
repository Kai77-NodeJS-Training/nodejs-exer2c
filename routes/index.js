const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render("index", {
        pageTitle: "Index"
    });
});

router.post('/add-user', (req, res, next) => {
    users.push({ user: req.body.user });
    res.redirect('/users');
});

exports.routes = router;
exports.users = users;