import { NextFunction, Request, Response } from "express";

export const validate = (schema: any) => async (req:Request, res: Response, next: NextFunction) => {
    try {
        await schema.validate({
            body: req.body,
        });
        return next();
    } catch (err: any) {
        return res.status(403).json({ type: err.name, message: err.message });
    }
};