import { Request } from "express";
import multer, { FileFilterCallback } from "multer";

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const singleFileUpload = (dest: string) =>{
    const storage = multer.diskStorage({
        destination : (request:Request, file:Express.Multer.File, callback:DestinationCallback):void => {
            callback(null, `D:/learn/Portfolios/ecommerce/frontend/public/assets/upload/${dest}`);
        },
        filename : (request:Request, file:Express.Multer.File, callback:FileNameCallback):void => {
            callback(null, Date.now()+'-'+file.originalname);
        }
    });
    
    const fileFilters = (request: Request, file: Express.Multer.File, callback: FileFilterCallback): void => {
        if (
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/webp'
        ) {
            callback(null, true)
        } else {
            callback(null, false);
            return callback(new Error('Only .png, .jpg, .jpeg and webp format allowed!'));
        }
    }


    const upload = multer({storage: storage, fileFilter: fileFilters });

    
}