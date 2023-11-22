const { Router } = require("express");
const router = Router();
const authRouter = require("./auth.router");

router.use("/auth", authRouter);

router.post("/transaction", () => {});
