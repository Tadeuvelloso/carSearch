import { Request, Response } from "express";
import { Car } from "../protocols/Car.js";
import carService from "../services/carsService.js";


async function createCar(req: Request, res: Response) {
    const car = req.body as Car;
    try{
        await carService.createCar(car);
        res.sendStatus(201);
    } catch(err) {
        return res.status(500).send(err.message);
    }
}

async function getAllCars(req: Request, res: Response) {
    try{
        const allCars = await carService.findAllCars();
        res.send(allCars)
    } catch(err) {
        return res.status(500).send(err.message);
    }
}

async function getCar(req: Request, res: Response) {
    const {id} = req.params;
    try{
        const car = await carService.findOneCar(Number(id));
        res.send(car);
    } catch(err) {
        return res.status(500).send(err.message);
    }
}


async function updateCar(req: Request, res: Response) {
    const car = req.body as Car;
    const { id } = req.params;
    try{
        await carService.updateOneCar(car, Number(id));
        res.sendStatus(200)
    } catch(err) {
        return res.status(500).send(err.message);
    }
}

async function deleteCar(req: Request, res: Response) {
    const { id } = req.params;
    try{
        await carService.deleteOneCar(Number(id));
        res.sendStatus(200);
    } catch(err) {
        return res.status(500).send(err.message);
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