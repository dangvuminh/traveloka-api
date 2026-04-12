import express from 'express'
import { createFlight, getFlights } from '../controllers/flights.controllers';

const router = express.Router();

router.get('/', getFlights);
router.post('/', createFlight);

export default router;