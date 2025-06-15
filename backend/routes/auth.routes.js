import e from "express";
import { login, signUp } from "../controllers/auth.controller.js";
const router = e.Router();

router.get("/login", login);
router.post("/signUp", signUp);

export default router;
