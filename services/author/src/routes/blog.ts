import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import uploadFile from "../middlewares/multer.js";
import {
  aiBlogResponse,
  aiDescriptionResponse,
  aiTitleResponse,
  createBlog,
  deleteBlog,
  updateBlog,
} from "../controllers/blog.js";

const router = express();

router.post("/blog/new", isAuth, uploadFile, createBlog);
router.post("/blog/:id", isAuth, uploadFile, updateBlog);
router.delete("/blog/:id", isAuth, deleteBlog);
router.post("/ai/title", aiTitleResponse);
router.post("/ai/descripiton", aiDescriptionResponse);
router.post("/ai/blog", aiBlogResponse);

export default router;
