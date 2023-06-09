import { Response, Request, NextFunction } from "express"; 
import Category from "../model/CategoryModel";

class CategoryController {

    index = async (req:Request, res: Response): Promise<void> => {
        const data = await Category.find({});
        res.status(200).send(data);
    }

    store = async (req:Request, res:Response, next: NextFunction): Promise<void | boolean> => {
        const { category } = req.body;
        const image = req.file?.filename;

        if(image === undefined){
            res.status(400).json({"message" : "please select image first"});
            return false;
        }

        const create = Category.create({
            name : category,
            image : image
        });
        res.status(200).send("category is inserted successfully");
    }

    edit = async (req: Request, res: Response):Promise<void> => {
        const { id } = req.params;
        const data = await Category.findOne({ _id: id });
        res.status(200).send(data); 
    }

    update = async(req: Request, res: Response):Promise<void> => {
        res.status(200).send(req.body);
        const { id } = req.params;
        const image = req.file?.filename;
    }

}

export default CategoryController;