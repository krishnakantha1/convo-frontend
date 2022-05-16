const express = require("express");
const path = require("path");

app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

PORT = process.env.PORT || 3000;
//required
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
