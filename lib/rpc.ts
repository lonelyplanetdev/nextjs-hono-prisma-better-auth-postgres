import { AppType } from "@/server";
import { hc } from "hono/client";

const client = hc<AppType>(process.env.NEXT_PUBLIC_API_URL!);

export default client;
