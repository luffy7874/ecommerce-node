import { string, number, object } from 'yup';

export const userRequest =  object({
            body: object({
                name : string().required(),
                email : string().email().required(),
                phone : number().required(),
                password : string().min(8).max(16).required(),
            })
        });