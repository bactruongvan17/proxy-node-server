import dotenv from "dotenv";
dotenv.config();

import express from "express";
import openWeatherMapRouter from './openweathermap/route.js';

const app = express();

const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/openweathermap', openWeatherMapRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});