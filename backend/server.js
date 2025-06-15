import e from "express";
import dotenv, { configDotenv } from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectDb from "./config/db.js";

configDotenv();

const app = e();
const Port = process.env.PORT || 3000;
app.use(e.json());
app.use(e.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Ram Ram");
});

app.listen(Port, () => {
  console.log(`Server is running at : ${Port}`);
  connectDb();
});

app.use("/api/auth", authRoutes);
