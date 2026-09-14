"use client";

import useSWR from "swr";
import { columns, ProductType } from "./columns";
import { DataTable } from "./data-table";

const fetcher = (url: string) =>
  fetch(url)
    .then((r) => r.json())
    .then((data: ProductType[]) => data);

export function ProductTableContent() {
  const apiUrl =
    process.env.NEXT_PUBLIC_FAKESTORE_API || "https://fakestoreapi.com";
  const { data, error, isLoading } = useSWR(`${apiUrl}/products`, fetcher);

  if (error) return <div>Failed to Load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <DataTable 
      columns={columns as any} 
      data={data as ProductType[]} 
    />
  );
}
