const express = require("express");

const app = express();


app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Methods", "*");
  res.set("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());

const routes = require("./config/routes.config.js");
app.use("/api/v1", routes);

app.use((req, res, next) => next(createError(404, "Page not found")));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`app running at port ${port}`));
