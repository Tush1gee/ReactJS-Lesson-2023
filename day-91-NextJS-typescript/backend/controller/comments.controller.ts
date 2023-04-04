import CommentsModel from "../models/comments.model";
import { Request, Response } from "express";

export const getCommentsById = async (req: Request, res:Response) => {
    try {
        const comments = await CommentsModel.find({}).limit(100)
        res.status(200).json(comments);
    } catch (error) {
        res.status(404).json({data: []})
    }
}