import { hc } from "hono/client";
import app from ".";

const host = "http://localhost:3000";
// const host = "https://api.example.com";

export const RPC = hc<typeof app>(host);
