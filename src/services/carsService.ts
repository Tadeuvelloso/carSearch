import { create, findAll, updateCar, findCarById, deleteCar, findCarByModel } from "../repository/carsRepositories.js";
import { Car } from "../protocols/Car.js";
import { NotFoundError, ConflitError } from "../errors/index.js";

async function createCar(car:Car) {
    const {rowsCont} = await findCarByModel(car.model);
 
    if(rowsCont !== 0){
        throw ConflitError()
    }
    await create(car);
}

async function findAllCars() {
    const { rows } = await findAll();
    return rows
}

async function findOneCar(id: number) {
    const { rows } = await findCarById(id);
    if(rows.length === 0){
        throw NotFoundError();
    }
    return rows
}

async function updateOneCar(car:Car, id: number) {
    const { rows, rowsCont } = await findCarById(id);
    if(rowsCont === 0){
        throw NotFoundError();
    }

    await updateCar(id, car);
}

async function deleteOneCar(id: number) {
    const { rowsCont } = await findCarById(id);
    if(rowsCont === 0){
        throw NotFoundError();
    }
        await deleteCar(id);
}

const carService = {
    createCar,
    findAllCars,
    findOneCar,
    updateOneCar,
    deleteOneCar
}

export default carService;