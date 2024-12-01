import { Hono } from "hono";

const authController = new Hono().get("/login", (c) => {
  return c.json({
    message: "Login",
  });
});

export default authController;
