import express from 'express'
import { createAirline, getAirlines } from '../controllers/airlines.controller';

const router = express.Router();

router.get('/', getAirlines);
router.post('/', createAirline);

export default router;