import connectDB from "./config/db.js";
import app from "./config/app.js";
//MongoDB connection
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
