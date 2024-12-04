import { Router } from 'express';
import location from '../controllers/LocationControler';

const routes = Router();

routes.post('/loc', location.getLocations)
routes.get('/coord', location.getRandomLocation)

export default routes