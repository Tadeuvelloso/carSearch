import express, { json, Response, Request } from "express";
import carsRoutes from "./routes/cars.Routes.js";

const app = express();
app.use(json());
app.use(carsRoutes)

app.get("/health", (req: Request, res: Response) => {
    res.send("Funcionado!");
}); 
 
app.listen(5000, () => {
    console.log("Server is up and running on port 5000");
})
