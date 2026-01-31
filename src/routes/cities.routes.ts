import express from 'express'
import { createCity, getCities } from '../controllers/cities.controller';

const router = express.Router();

router.get('/', getCities);
router.post('/', createCity);

export default router;