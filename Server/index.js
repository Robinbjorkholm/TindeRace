const express = require("express");
const app = express();
const port = process.env.PORT;








app.listen(port || 3001, () => {
  console.log(`server running on port ${port}`);
});