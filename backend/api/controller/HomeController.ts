import { Request, Response } from "express";

class HomeController {
    static redirect = (req:Request, res: Response) => {
        res.redirect('/api');
    }

    static api = (req:Request, res: Response) => {
        res.status(403).send({"Yo ^-^:)" : "You should not be here please go back or leave the website ^-^"})
    }
}

export default HomeController;