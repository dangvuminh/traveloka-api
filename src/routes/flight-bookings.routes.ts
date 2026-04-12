import express from 'express'
import { createFlightBooking, getFlightBookings } from '../controllers/flight-bookings.controllers';

const router = express.Router();

router.get('/', getFlightBookings);
router.post('/', createFlightBooking);

export default router;