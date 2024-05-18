import express from 'express';
import { geocodeing, forecast } from './controller.js';

const router = express.Router();

router.get('/geocoding', geocodeing);
router.get('/forecast', forecast);

export default router;
