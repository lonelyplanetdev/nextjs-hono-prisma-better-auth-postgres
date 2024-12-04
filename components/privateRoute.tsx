"use client";

import client from "@/lib/rpc";
import type { InferRequestType } from "hono/client";
import useSWR from "swr";

export default function PrivateRoute() {
  const $get = client.api.private.$get;
  const fetcher = (arg: InferRequestType<typeof $get>) => async () => {
    const res = await $get(arg);
    return await res.json();
  };

  const { data, error, isLoading } = useSWR(
    "private-route",
    fetcher({
      query: {
        name: "SWR",
      },
    })
  );

  return (
    <div>
      <h1>Your user is {data?.user?.name}</h1>
    </div>
  );
}
