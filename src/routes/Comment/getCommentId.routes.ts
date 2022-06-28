import { Router } from "express";
import { getPostById } from "../../controllers/post/getPostById";

const router = Router()

router.get('/', getPostById)

export default router