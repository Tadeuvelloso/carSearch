import { create, findAll, updateCar, findCarById, deleteCar, findCarByModel } from "../repository/carsRepositories.js";
import { Car } from "../protocols/Car.js";

async function createCar(car:Car) {
    const {rowsCont} = await findCarByModel(car.model);
    if(rowsCont){
        throw new Error("Conflit error")
    }
    await create(car);
}

async function findAllCars() {
    const { rows } = await findAll();
    return rows
}

async function findOneCar(id: number) {
    const { rows, rowsCont } = await findCarById(id);
    if(!rowsCont){
        throw new Error("Not found");
    }
    return rows
}

async function updateOneCar(car:Car, id: number) {
    const {rowsCont} = await findCarByModel(car.model);
    if(rowsCont){
        throw new Error("Conflit error")
    }
    await updateCar(id, car);
}

async function deleteOneCar(id: number) {
    const { rowsCont } = await findCarById(id);
    if(!rowsCont){
        throw new Error("Not found");
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