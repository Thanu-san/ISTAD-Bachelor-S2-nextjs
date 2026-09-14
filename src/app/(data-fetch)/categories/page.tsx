import CategoryListComponent from "@/components/catagory/CategoryListComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | M2-Thanu",
    default: "M2-Thanu",
  },
  keywords: "Always smart , but never smartest, Always an option , but never the one",
  description: "ISTAD has change my life, what a school , My first year I already know what is Nextjs",
  openGraph: {
    title: "This is my Next-js class",
    description: "ISTAD has change my life, what a school , My first year I already know what is Nextjs",
    images: ["/Thumbnail.jpg"],
  },
};

export default function CategoryPage() {
  const baseUrl =
    process.env.FAKESTORE_PLAZI_API ||
    process.env.NEXT_PUBLIC_FAKESTORE_PLAZI_API;
  const category = fetch(`${baseUrl}/categories`)
    .then((data) => data.json())
    .then((category) => {
      console.log(category);
      return category;
    });

  return (
    <div>
      <CategoryListComponent category={category} />
    </div>
  );
}

export const dynamic = 'force-dynamic';
