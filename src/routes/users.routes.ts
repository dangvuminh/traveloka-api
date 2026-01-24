import express from "express";
import * as userConntroller from "../controllers/users.controller";

const router = express.Router();

router.get('/', userConntroller.getUsers);
router.post('/', userConntroller.createUser);


export default router;

