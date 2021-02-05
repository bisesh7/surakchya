const express = require("express");
const app = express();
const user = require("./Routes/Api/user");

// Body parser
app.use(express.json());

// Routes for /api/user
app.use("/api/user", user);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at port number ${port}`);
});
