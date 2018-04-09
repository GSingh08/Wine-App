const express = require("express");
const app = express();
const Wine = require("./model/Wines");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/wines", (request, response) => {
  Wine.getAll().then(wines => {
    response.json(wines);
  });
});

app.get("/api/wines/:id", (request, response) => {
  const id = request.params.id;
  Wine.findById(id).then(wine => {
    response.json(wine);
  });
});

app.listen(4567, () => console.log("Example app listening on port 4567!"));
