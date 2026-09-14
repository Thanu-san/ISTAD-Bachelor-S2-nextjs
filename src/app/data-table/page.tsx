import { Metadata } from "next";
import { ProductTableContent } from "./product-table-content";

export const metadata: Metadata = {
  title: {
    template: "%s | M2-Thanu",
    default: "M2-Thanu",
  },
  keywords:
    "Always smart , but never smartest, Always an option , but never the one",
  description:
    "ISTAD has change my life, what a school , My first year I already know what is Nextjs",
  openGraph: {
    title: "This is my Next-js class",
    description:
      "ISTAD has change my life, what a school , My first year I already know what is Nextjs",
    images: ["/Thumbnail.jpg"],
  },
};

export default function ProductDataTable() {
  return (
    <div className="container mx-auto py-10">
      <ProductTableContent />
    </div>
  );
}
