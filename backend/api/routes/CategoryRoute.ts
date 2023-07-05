import { Request, Router } from "express";
import * as fs from "fs";

const route = Router();

import AuthToken from "../middleware/AuthToken";
import { categoryRequest } from "../request/CaregoryRequest";
import CategoryController from "../controller/CategoryController";
import multer from "multer";
import { fileFilters } from "../utils/FileValidation";
import { validate } from "../middleware/validate";

const authToken = new AuthToken();
const categoryController = new CategoryController();

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const dest: string = `${process.env.FILE_UPLOAD_LOCATION}/categories`;

const storage = multer.diskStorage({
    destination : (request:Request, file:Express.Multer.File, callback:DestinationCallback):void => {
        if(!fs.existsSync(dest)){
            fs.mkdirSync(dest);
        }
        callback(null, dest);
    },
    filename : (request:Request, file:Express.Multer.File, callback:FileNameCallback):void => {
        callback(null, Date.now()+'-'+file.originalname);
    }
});

const upload = multer({storage: storage, fileFilter : fileFilters});

route.get('/api/category/list', authToken.verifyAuth, categoryController.index);
route.post('/api/category/add', [authToken.verifyAuth, upload.single('image'), validate(categoryRequest)], categoryController.store);
route.get('/api/category/edit/:id', authToken.verifyAuth, categoryController.edit);
route.post('/api/category/update/:id', [authToken.verifyAuth, upload.single('image'), validate(categoryRequest)], categoryController.edit);

export {route};