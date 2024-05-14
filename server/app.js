import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import {errorMiddleware} from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';


const app = express();
dotenv.config({ path: "./.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.get('/', (req, res) => {
  res.send('Welcome to Dish-E-Delights backend. Wish you a good day!!');
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/reservation', reservationRouter)

dbConnection();

app.use(errorMiddleware)

export default app;
