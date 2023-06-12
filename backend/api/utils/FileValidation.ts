import { Request } from "express";
import { FileFilterCallback } from "multer";


export const fileFilters = (request: Request, file: Express.Multer.File, callback: FileFilterCallback): void => {
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