import { connectionDb } from "../configs/database.js";
import { Car } from "../protocols/Car.js";
import { QueryResult } from "pg";

async function create(car: Car): Promise<QueryResult> {
    return connectionDb.query(`INSERT INTO cars (model, plate, category, year, brand, price, color) VALUES ($1, $2, $3, $4, $5, $6, $7);`, [car.model, car.plate, car.category, car.year, car.brand, car.price, car.color]);

}

async function findAll(): Promise<QueryResult<Car>> {
    return await connectionDb.query(
        `
        SELECT * FROM cars;
        `
    )
}

async function findCarByModel(model: string): Promise<QueryResult<Car>> {
    return connectionDb.query(
        `
        SELECT * FROM cars WHERE model = $1;
        `, [model]
    )
}

async function findCarById(id: number): Promise<QueryResult<Car>> {
    return connectionDb.query(
        `
        SELECT * FROM cars WHERE id = $1;
        `, [id]
    )
}

async function updateCar(id: number, car: Car): Promise<QueryResult> {
    await connectionDb.query(
        `
        UPDATE cars SET model = $1, plate = $2, category = $3, year = $4, brand = $5, price = $6, color = $7 WHERE id = $8;
        `,[car.model, car.plate, car.category, car.year, car.brand, car.price, car.color, id]
    )

}

async function deleteCar(id: number): Promise<QueryResult> {
    await connectionDb.query(
        `
        DELETE FROM cars WHERE id = $1;
        `, [id]
    )
}

export {
    create,
    findAll,
    updateCar,
    findCarById,
    deleteCar,
    findCarByModel
}