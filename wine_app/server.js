//Lets us do app.get, server abilities.
const express = require("express");
const app = express();
const Wine = require("./model/Wines");
//Without cors localhost 3000 would not be able to tlk to localhost 4567. Require this.
const cors = require("cors");
//It lets you grab data from forms, like inputs.
const bodyParser = require("body-parser");
//After requiring cors, this statement below is what lets localhost 3000 and localhost 4567 talk.
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/wines", (request, response) => {
  Wine.getAll().then(wines => {
    response.json(wines);
  });
});

app.get("/api/wine/:id", (request, response) => {
  const id = request.params.id;
  Wine.findById(id).then(wine => {
    response.json(wine);
  });
});

app.listen(4567, () => console.log("Example app listening on port 4567!"));
