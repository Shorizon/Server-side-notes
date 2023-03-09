const express = require('express');
const path = require('path');
const app = express();
const logger = require("./logger")
const cors = require("cors")
const router = require("./router/router");
const noteRouter = require('./router/noteRouter');
const forumRouter = require('./router/forumRoute');
require("dotenv").config();

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(logger)

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, '../client'), {
  setHeaders: (res, filepath) => {
    if (filepath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (filepath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filepath.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
    } else if (filepath.endsWith('.jpg') || filepath.endsWith('.jpeg')) {
      res.setHeader('Content-Type', 'image/jpeg');
    } else if (filepath.endsWith('.webp')) {
      res.setHeader('Content-Type', 'image/webp');
    }
  }
}));

app.use("/", router);
app.use("/note", noteRouter)
app.use("/forum", forumRouter)
module.exports = app;
