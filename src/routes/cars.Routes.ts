import { Router } from "express";
import carsControllers from "../controllers/carsControllers.js";
import { validationSchema } from "../middlewares/carMiddleware.js";
import { carSchema } from "../schemas/carSchema.js";

const carsRoutes = Router();

carsRoutes.post("/cars",validationSchema(carSchema), carsControllers.createCar);
carsRoutes.get("/cars", carsControllers.getAllCars);
carsRoutes.get("/cars/:id", carsControllers.getCar);
carsRoutes.put("/cars/:id",validationSchema(carSchema), carsControllers.updateCar);
carsRoutes.delete("/cars/:id", carsControllers.deleteCar);

export default carsRoutes;