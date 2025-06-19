import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectDb from "./config/db.js";
import { app, server } from "./socket/Socket.js";

dotenv.config();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);

app.use(express.static(path.join(__dirname, "frontend", "dist")));
console.log(
  "Sending file:",
  path.join(__dirname, "frontend", "dist", "index.html")
);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  console.log(`✅ Server is running at port ${PORT}`);
  connectDb();
});
