import { Router } from 'express';
import location from '../controllers/LocationControler';

const routes = Router();

routes.get('/loc', location.getLocations)

export default routes