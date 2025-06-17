import e from "express";
import { login, signUp, logout } from "../controllers/auth.controller.js";

const router = e.Router();

router.post("/login", login);
router.post("/signUp", signUp);
router.post("/logout", logout);

export default router;
