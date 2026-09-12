import { ProductDetailComponent } from "@/components/products/ProductDetailComponent";

export default async function ProductDetailPage({
  params
}: {
  params:Promise<{slug:string}>
}) {

  const {slug} = await params;
  return (
    <div>
      <ProductDetailComponent id={slug}/>
      {/* <h1>Product Slug: {slug}</h1> */}
    </div>
  )
}
