import { Request, Response } from "express";
import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/health-check", (_req: Request, res: Response) => {
    res.status(2000).json({
        success: true,
        message: "Server is healthy",
    })
});
