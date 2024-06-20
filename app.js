const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const expressHbs = require('express-handlebars');

const app = express();

app.engine(
    "hbs",
    expressHbs({
        layoutsDir: "views/layouts",
        defaultLayout: "main-layout",
        extname: "hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(indexRoutes.routes);
app.use(usersRoutes);

app.listen(3000);