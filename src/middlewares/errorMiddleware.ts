import { Request, Response, NextFunction } from 'express';
import httpStatus from "http-status";

export function handleApplicationErrors(err: Error, req: Request,  res: Response, next: NextFunction){
    console.log(err)
    if(err.name === "ConflitError"){
        return res.status(httpStatus.CONFLICT).send({
            message: err.message
        })
    }
    if(err.name === "NotFoundError"){
        return res.status(httpStatus.NOT_FOUND).send({
            message : err.message
        })
    }
    return res.send(err).status(409)
}