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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define CORS options
// const corsOptions = {
//   origin: process.env.FRONTEND_URL, // Allow requests from the specified origin
//   methods: ["POST"], // Allow only POST requests
//   credentials: true, // Allow credentials (cookies, authorization headers, etc.)
// };

// // Enable CORS with the defined options
// app.use(cors(corsOptions));

app.use('/api/reservation', reservationRouter)

dbConnection();

app.use(errorMiddleware)

export default app;
