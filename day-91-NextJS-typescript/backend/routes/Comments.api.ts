import { Router } from "express";
import { getCommentsById } from "../controller/comments.controller";

const CommentRouter = Router()

CommentRouter.get("/list", getCommentsById)

export default CommentRouter