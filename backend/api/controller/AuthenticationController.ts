import { Request, Response } from "express";
import User from "../model/UserModel";
import { compare, hash } from 'bcrypt';
import AuthToken from "../middleware/AuthToken";

class AuthenticationController{

    public authtoken: any;

    constructor(){
        this.authtoken =  new AuthToken();
    }
    /*
        User Register code is here
        -------------------------------------
        we are checking old user then putting logics
    */ 

    register = async(req: Request, res: Response): Promise<void> => {

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

     login = async(req: Request, res: Response): Promise<void> => {

        const {email, password} = req.body;

        const user = await User.findOne({
            email : email
        });

        if(user && (await compare(password, user.password))){
            const token =  this.authtoken.createJwtToken(user._id, user.name, user.email);

            res.status(200).send(token);
        }else{
            res.status(401).send({"msg": "invalid username/password"});
        }

    }
}

export default AuthenticationController;