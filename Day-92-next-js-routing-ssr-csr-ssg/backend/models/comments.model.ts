import mongoose, {Schema} from "mongoose";

interface IComments {
    id: number,
    name: string,
    email: string,
    movie_id: number,
    text: string,
    date: Date

}

const CommentsSchema: Schema = new Schema ({});

const CommentsModel = mongoose.model<IComments>("Comments", CommentsSchema)
export default CommentsModel