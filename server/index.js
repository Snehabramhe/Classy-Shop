import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet"; 
import connectDB from "./config/connectDB.js";

const app = express(); //initialize the server

app.use(cors());
// app.options('/*',cors());
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
// app.use(morgan());
app.use(morgan('dev'));
app.use(helmet({
    crossOriginResourcePolicy: false
}));


const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.get('/', (request, response) => {
    response.json({
        message: 'Server is running ' + port,
    });
});

connectDB().then(() => {
  app.listen(port, hostname, () => {
    console.log(`Server started at ${hostname}:${port}`);
});
})