import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export function validationSchema (schema: ObjectSchema){
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, {abortEarly: false});
        if (error){
            const errors = error.details.map((detail) => detail.message)
            throw errors
        }
        
        next();  
    };
    
}