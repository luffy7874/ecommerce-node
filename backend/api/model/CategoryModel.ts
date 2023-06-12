import { Schema, model } from "mongoose";

interface ICategory{
    name: string,
    image: string,
}

const CategorySchema = new Schema({
    name: {
        type: String,
        required : true,
    },
    image: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default : new Date()
    }
});

const Category = model<ICategory>('Category', CategorySchema);

export default Category;