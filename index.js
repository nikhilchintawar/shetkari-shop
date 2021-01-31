require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const cookiParser = require("cookie-parser");
const cors = require("cors");

//my routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const stripeRoutes = require('./routes/stripePayment');


//config
const connectDB = require("./config/db");

const app = express()

//port
const port = process.env.PORT || 5000

//db connection
connectDB()

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookiParser());
app.use(cors());
// app.use(passport.initialize());

//routes
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", productRoutes)
app.use("/api", orderRoutes)
app.use("/api", stripeRoutes)



app.listen(port, () => {
    console.log("port is running on port 5000")
})