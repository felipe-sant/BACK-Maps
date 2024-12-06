import { Router } from "express";
import coord from "./coordRoutes"

function indexRoutes() {
    const routes = Router()
    routes.use("/coord", coord)
    routes.use((_, res) => {
        res.status(404)
    })
    return routes
}

export default indexRoutes()