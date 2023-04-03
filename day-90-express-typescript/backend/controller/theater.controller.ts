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
    const street: string = String(req.query.keyword)
    try{
        const theaters = await TheaterModel.findOne({
            "location.address.street1": street
        })
        res.status(200).json(street);
    } catch(error) {
        res.status(404).json({data: []})
    }
}

export const getSearchByCityName = async (req: Request, res: Response) => {
    const Cityname: string = String(req.query.keyword)
    try{
        res.status(200).json(Cityname);
    } catch(error) {
        res.status(404).json({data: []})
    }
}

export const getSearchByZipcode = async (req: Request, res: Response) => {
    const Zipcode: string = String(req.query.keyword)
    try{
        res.status(200).json(Zipcode);
    } catch(error) {
        res.status(404).json({data: []})
    }
}
      
export const getSearchByState = async (req: Request, res: Response) => {
    const State: string = String(req.query.keyword)
    try{
        res.status(200).json(State);
    } catch(error) {
        res.status(404).json({data: []})
    }
}
    

