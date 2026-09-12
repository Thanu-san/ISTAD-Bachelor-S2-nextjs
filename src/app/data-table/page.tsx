'use client'
import { columns, ProductType} from "./columns"
import { DataTable } from "./data-table"
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).
then((r) => r.json())
.then((data:ProductType[]) => data)

export default function ProductDataTable() {
  const {data, error, isLoading} = useSWR('https://fakestoreapi.com/products',fetcher);

  if (error) return <div>Failed to Load</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <div className="container mx-auto py-10">
      <DataTable 
      columns={columns} 
       data={data  as ProductType[]} />
    </div>
  )
}