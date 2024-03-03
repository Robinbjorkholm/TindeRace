const express = require("express");
const app = express();
require("dotenv").config();
require("./config")(app);

app.listen(process.env.PORT || 3001, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
