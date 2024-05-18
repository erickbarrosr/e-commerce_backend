import { Router } from "express";
import UserController from "../controllers/UserController";
import auth from "../middlewares/auth";

const router = Router();

router.post("/register", UserController.signUp);
router.post("/login", UserController.signIn);
router.post("/logout", auth, UserController.logout);

export default router;
