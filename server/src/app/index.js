const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/tasks.route");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/v1", router);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
