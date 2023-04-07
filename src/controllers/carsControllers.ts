import { NextFunction, Request, Response } from "express";
import { Car } from "../protocols/Car.js";
import carService from "../services/carsService.js";


async function createCar(req: Request, res: Response, next: NextFunction) {
    const car = req.body as Car;
    try{
        await carService.createCar(car);
        res.sendStatus(201);
    } catch(err) {
        next(err);
    }
}

async function getAllCars(req: Request, res: Response, next: NextFunction) {
    try{
        const allCars = await carService.findAllCars();
        res.send(allCars)
    } catch(err) {
        next(err);
    }
}

async function getCar(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    try{
        const car = await carService.findOneCar(Number(id));
        res.send(car);
    } catch(err) {
        next(err);
    }
}


async function updateCar(req: Request, res: Response, next: NextFunction) {
    const car = req.body as Car;
    const { id } = req.params;
    try{
        await carService.updateOneCar(car, Number(id));
        res.sendStatus(200)
    } catch(err) {
        next(err);
    }
}

async function deleteCar(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try{
        await carService.deleteOneCar(Number(id));
        res.sendStatus(200);
    } catch(err) {
        next(err);
    }
}

 const carsControllers = {
    createCar,
    getAllCars,
    getCar,
    updateCar,
    deleteCar
}

export default carsControllers