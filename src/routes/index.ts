import userRoutes from './users.routes'
import airlineRoutes from './airlines.routes'
import countriesRoutes from './countries.routes'
import citiesRoutes from './cities.routes'
import { Express } from 'express';

export default function registerAppRoutes(app: Express) {
    app.use('/api/users', userRoutes);
    app.use('/api/airlines', airlineRoutes);
    app.use('/api/countries', countriesRoutes);
    app.use('/api/cities', citiesRoutes);
}