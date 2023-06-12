import { string, object} from 'yup';

export const categoryRequest =  object({
            body: object({
                category : string().required("category field is required"),
            }),
        });