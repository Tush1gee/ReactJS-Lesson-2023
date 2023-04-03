import mongoose, {Schema} from "mongoose";

interface IGeo {
    type: {
        type: string,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number, Number],
        required: true
    }
}

interface IAddress {
    street1: string,
    city: string,
    state: string,
    zip: string
}

interface ILocation {
    address: IAddress
    geo: IGeo
}

interface ITheater {
    theaterId: number,
    location: ILocation
}

const TheatrSchema: Schema = new Schema ({});

const TheaterModel = mongoose.model<ITheater>("Theatr", TheatrSchema)

export default TheaterModel