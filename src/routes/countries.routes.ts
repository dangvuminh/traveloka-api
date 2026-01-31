import express from 'express'
import { createCountry, getCountries } from '../controllers/countries.controller';

const router = express.Router();

router.get('/', getCountries);
router.post('/', createCountry);

export default router;