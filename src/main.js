import dotenv from "dotenv";
dotenv.config();

import express from "express";
import openWeatherMapRouter from './openweathermap/route.js';
import cors from "cors";

const corsOptions = {
  origin: process.env.ALLOW_DOMAIN,
  optionsSuccessStatus: 200
}

const app = express();

const port = process.env.APP_PORT || 3000;

app.get('/', cors(corsOptions), (req, res) => {
  res.send('Server API belongs to <a href="https://github.com/bactruongvan17">https://github.com/bactruongvan17</a>')
});

app.use('/openweathermap', cors(corsOptions), openWeatherMapRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});