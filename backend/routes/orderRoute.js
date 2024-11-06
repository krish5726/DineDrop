import { placeOrder, verifyOrder, userOrder, allOrder, updateStatus } from "../controllers/orderController.js";
import express from "express"
import authMiddleware from "../middleware/auth.js"

const orderRouter = express.Router();
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders", authMiddleware, userOrder)
orderRouter.get("/list", allOrder);
orderRouter.post("/status", updateStatus)
export default orderRouter;