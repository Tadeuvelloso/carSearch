import express, { json, Response, Request } from "express";
import carsRoutes from "./routes/cars.Routes.js";
import cors from "cors";
import { handleApplicationErrors } from "./middlewares/errorMiddleware.js";

const app = express();
app
  .use(cors())
  .use(json())
  .get("/health", (req: Request, res: Response) => {res.send("Funcionado!")})
  .use(carsRoutes)
  .use(handleApplicationErrors)
 
const port = 5000
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})
