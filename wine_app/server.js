const express = require("express");
const app = express();
const Wine = require("./model/Wines");

app.get("/api/wines", (request, response) => {
  Wine.getAll().then(wines => {
    response.json(wines);
  });
});

app.listen(4567, () => console.log("Example app listening on port 4567!"));
