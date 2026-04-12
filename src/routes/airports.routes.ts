import express from 'express'
import { createAirport, getAirports } from '../controllers/airports.controller';

const router = express.Router();

router.get('/', getAirports);
router.post('/', createAirport);

export default router;