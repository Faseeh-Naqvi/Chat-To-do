import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers.js";
const userRoutes = Router();
//define all HTTP words that we will be accepting in the app
userRoutes.get("/", getAllUsers);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map