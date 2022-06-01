const express = require("express");
const path = require("path");
// const { HOST } = require("./src/constants");
const cors = require("cors");

// const db = require("./src/db.js");

const PORT = process.env.PORT || 3000;
// const surferMapping = {
//   151
// }
const app = express()
  .set("port", PORT)
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs");

app.use(cors());

app.get("/", function (req, res) {
  res.send("Surf Punks 2022");
});

/* Gets metadata for a surfer
 */
// app.get("/api/surfer/:surfer", function (req, res) {
//   const surfer = +req.params.surfer;
//   const metadata = {
//     name: `${surfer}`,
//     symbol: "SurfPunks",
//     background_color: "", // probably need this
//     image: `https://${req.headers.host}/api/images/surfers/${surfer}`,
//     description:
//       "The second iteration of Surf Punks, evolved and ready, paddling out in to the Aquaverse.",
//   };

//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify(metadata, null, 4));
// });

/* Gets metadata for a surfer that has not been revealed */
app.get("/api/surfer/images/:surfer", function (req, res) {
  const surfer = +req.params.surfer;
  res.sendFile(`./public/images/new-surfers/${surfer}.png`, {
    root: __dirname,
  });
});

app.listen(app.get("port"), function () {
  console.log("Node app is running on port ", app.get("port"));
});
