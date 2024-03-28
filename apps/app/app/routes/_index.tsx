import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RPC } from "@boiler/api";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const res = await RPC["v1.0"].accounts.users.$get();

  if (!res.ok) {
    throw res;
  }

  return res.json();
}

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{loaderData?.message}</h1>
    </div>
  );
}
