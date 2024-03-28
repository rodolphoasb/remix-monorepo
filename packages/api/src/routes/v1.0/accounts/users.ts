import { Hono } from "hono";

const users = new Hono()
  .get("/", (c) => c.json({ message: "GET" }))
  .post("/", (c) => c.json({ message: "POST Users" }));

export default users;
