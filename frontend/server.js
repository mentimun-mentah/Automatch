const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const axios = require("axios");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const apiURL = process.env.apiURL;
  const baseURL = process.env.baseURL;
  const server = express();
  server.use(cookieParser("automatch"));

  //Listen
  server.get(`/oauth/:access_token/:refresh_token`, (req, res) => {
    const { access_token, refresh_token } = req.params;
    res.cookie("access_token", access_token);
    res.cookie("refresh_token", refresh_token);
    res.redirect(302, baseURL);
  });

  server.get("/user-confirm/:token", async (req, res) => {
    const { token } = req.params;
    await axios.get(`${apiURL}/user-confirm/${token}`).then((response) => {
      res.cookie("access_token", response.data.access_token);
      res.cookie("refresh_token", response.data.refresh_token);
      res.cookie("name", response.data.username);
      res.cookie("fresh", true);
      res.redirect(302, baseURL);
    })
    .catch(err => {
      console.log("error confirm server => ", err.response)
    })
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
