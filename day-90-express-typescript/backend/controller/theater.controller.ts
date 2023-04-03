import TheaterModel from "../models/theaters.model";
import { Request, Response } from "express";

export const getTheaters = async (req: Request, res: Response) => {
    try {
        const theaters = await TheaterModel.find();
        res.status(200).json(theaters);
      } catch (error) {
        res.status(400).json({data: []})
      }
};

export const getTheaterById = async (req: Request, res: Response) => {
    try {
        const theaters = await TheaterModel.find({
            theaterId: Number(req.params.id),
        })
        res.status(200).json(theaters);
      } catch (error) {
        res.status(404).json({data: []})
      }
};



export const getSearchByStreet = async (req: Request, res: Response) => {
    try{
        const searchTheater = String(req.query.keyword)
        res.status(200).json(searchTheater);
    } catch(error) {
        res.status(404).json({data: []})
    }
}

export const getSearchByCityName = async (req: Request, res: Response) => {
    try{
        const searchTheater = String(req.query.keyword)
        res.status(200).json(searchTheater);
    } catch(error) {
        res.status(404).json({data: []})
    }
}

export const getSearchByZipcode = async (req: Request, res: Response) => {
    try{
        const searchTheater = String(req.query.keyword)
        res.status(200).json(searchTheater);
    } catch(error) {
        res.status(404).json({data: []})
    }
}
      
export const getSearchByState = async (req: Request, res: Response) => {
    try{
        const searchTheater = String(req.query.keyword)
        res.status(200).json(searchTheater);
    } catch(error) {
        res.status(404).json({data: []})
    }
}
    

