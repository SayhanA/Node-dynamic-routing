const express = require("express");
const path = require("path");
require("dotenv").config();

const adminRoute = require("./routes/admin");
const rootPath = require("./uttils/path");
const get404 = require("./controllers/404");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/admin", adminRoute);
app.use(get404);

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}/`));
