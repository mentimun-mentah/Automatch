const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser("asu"));

  //Listen
  server.get(`/oauth/:access_token/:refresh_token`, (req, res) => {
    const { access_token, refresh_token } = req.params;
    res.cookie("access_token", access_token);
    res.cookie("refresh_token", refresh_token);
    res.redirect(302, "http://localhost:3000/");
  });

  server.get("/export/:jobId", (req, res) => {
    const { jobId } = req.params;
    return app.render(req, res, "/export", { jobId });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (error) => {
    if (error) {
      throw error;
    }
    console.log("===== server is ready =====");
  });
});