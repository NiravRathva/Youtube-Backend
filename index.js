import mongoose from "mongoose";
import express from 'express';
import dotenv from "dotenv";
import UsersRoutes from "./Routes/Users.js"
import VideoRoutes from "./Routes/Videos.js"
import CommentRoutes from "./Routes/Comments.js"
import AuthRoutes from "./Routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
const port = 8000

dotenv.config();
// conncting to database
const connectToMongo = () => {
  mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to DB");
  })
    .catch((err) => {
      throw err;
    });
};

app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", AuthRoutes);
app.use("/api/users", UsersRoutes);
app.use("/api/videos", VideoRoutes);
app.use("/api/comments", CommentRoutes);

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});


app.listen(port, () => {
  connectToMongo();
  console.log(`Example app listening on port ${port}`)

})

