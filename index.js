const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
/** import routes */
const rootRoute = require("./routes/root.route");
const userRoute = require("./routes/user.route");
/** middleware */
app.use(cors());
app.use(express.json());

/** server  running status*/
app.use("/", rootRoute);
app.use("/user/random", userRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
