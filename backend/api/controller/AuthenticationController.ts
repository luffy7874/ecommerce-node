import { Request, Response } from "express";
import User from "../model/UserModel";
import jwt from 'jsonwebtoken'
import { compare, hash } from 'bcrypt';

class AuthenticationController{

    /*
        User Register code is here
        -------------------------------------
        we are checking old user then putting logics
    */ 

    static register = async(req: Request, res: Response): Promise<void> => {

        const {name, email, phone, password} = req.body;

        const oldUser = await User.findOne({
            email : email
        });
        if(oldUser){
            res.status(201).send({"msg": "email id already exists"});
        }else{
            
            const hashPassword: string = await hash(password, 12);

            await User.create({
                name : name,
                email : email,
                phone : phone,
                password : hashPassword
            });
            res.status(201).send({"msg": "your are registerd successfully"});
        }
    }


    /*
        User Login
        ----------------------------
        we are using jwt to authenticate users
    */

    static login = async(req: Request, res: Response): Promise<void> => {

        const {email, password} = req.body;

        const { TOKEN_KEY } = process.env;

        const user = await User.findOne({
            email : email
        });

        if(user && (await compare(password, user.password))){
            const token = jwt.sign(
                {
                    name: user!.name,
                    role: user!.role
                },
                TOKEN_KEY!,
                {
                    expiresIn : "10s"
                }
            );

            res.status(200).send({"token": token});
        }else{
            res.status(401).send({"msg": "invalid username/password"});
        }

    }
}

export default AuthenticationController;