import * as mongoose from "mongoose"

export const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
});

export interface Todo {
    id: string;
    title: string;
    complete: boolean;
}