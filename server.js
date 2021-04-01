const express = require("express");
const app = express();
const user = require("./Routes/Api/user");
const config = require("config");
const mongoose = require("mongoose");
const hotel = require("./Routes/Api/hotel");
const auth = require("./Routes/Api/auth");
const cookieParser = require("cookie-parser");

// Body parser
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// get the mongouri from config
const db = config.get("mongoURI");

// Connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log("mongo db connected"))
  .catch((err) => {
    console.log(err);
  });

// Routes for /api/user
app.use("/api/user", user);
// Routes for /api/hotel
app.use("/api/hotel", hotel);
// Routes for /api/auth
app.use("/api/auth", auth);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at port number ${port}`);
});
