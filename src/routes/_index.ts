import { Router, Request, Response } from 'express';
import location from './location';

const routes = Router();

routes.use("/", location)

routes.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Not found' })
})

export default routes;