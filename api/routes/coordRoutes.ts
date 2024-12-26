import CoordController from "../controllers/CoordController";
import { Router } from 'express';

const coordRoutes = (): Router => {
    const routes = Router();
    const coordController = new CoordController();

    routes.get("/location", coordController.getLocationCoord);
    routes.get("/randomCoord", coordController.getRandomCoord);

    return routes;
};

export default coordRoutes;
