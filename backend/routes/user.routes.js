import e from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getAllUsers } from "../controllers/user.controller.js";

const router = e.Router();

router.get("/", protectRoute, getAllUsers);

export default router;
