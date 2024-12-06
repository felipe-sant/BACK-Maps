import { Router, Request, Response, NextFunction } from "express";
import coord from "./coordRoutes";

const indexRoutes = () => {
    const routes = Router();

    routes.use("/coord", coord());

    routes.use((req: Request, res: Response, next: NextFunction) => {
        res.status(404).json({ error: "Route not found" });
    });

    return routes;
};

export default indexRoutes;