import { Hono } from "hono";
import accounts from "./accounts";

export const v1_0 = new Hono().route("/accounts", accounts);
