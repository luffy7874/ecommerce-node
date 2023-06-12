import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { Types } from "mongoose";

class AuthToken {

    verifyAuth(req:Request, res:Response, next: NextFunction):void {
        const authHeader:string | undefined = req.headers.authorization;
        
        if(authHeader){
            const authToken: string = authHeader.split(' ')[1];
            if(authToken){
                const decoded: string | jwt.JwtPayload | void = jwt.verify(authToken, process.env.TOKEN_KEY!, (err, result):void => {
                    if(result){
                        next();
                    }else{
                        res.status(400).send("invalid token")
                    }
                });
            }
        }else{
            res.status(400).send("invalid token")
        }
    }
    
    /*
        verifing jwt expiry
    */
    verifyPageAuth(req:Request, res:Response):void {
        const authHeader:string | undefined = req.headers.authorization;
        
        if(authHeader){
            const authToken: string = authHeader.split(' ')[1];
            if(authToken){
                const decoded: string | jwt.JwtPayload | void = jwt.verify(authToken, process.env.TOKEN_KEY!, (err, result):void => {
                    if(result){
                        res.status(201).json({"msg" : "authenticated"});
                    }else{
                        res.status(400).send("invalid token")
                    }
                });
            }
        }else{
            res.status(400).send("invalid token")
        }
    }



    //creating auth token for web

    createJwtToken(_id: Types.ObjectId, name: string, email: string): object {
        const token:string = jwt.sign(
            {
                id : _id,
                name: name,
                email: email
            },
            process.env.TOKEN_KEY!,
            {
                expiresIn : "12h"
            }
        );

        return {
            token : token,
            refresh_token : token,
            expires_in : "12h"
        };
    }
}

export default AuthToken;