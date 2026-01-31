import userRoutes from './users.routes'
import airlineRoutes from './airlines.routes'
import { Express } from 'express';

export default function registerAppRoutes(app: Express) {
    app.use('/api/users', userRoutes);
    app.use('/api/airlines', airlineRoutes);
}