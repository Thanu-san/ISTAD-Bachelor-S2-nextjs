import { CardDemo } from "@/components/cards/CardDemoComponent";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | M2-Thanu',
    default: 'M2-Thanu'
  },
  keywords: "Always smart , but never smartest, Always an option , but never the one",
  description: "ISTAD has change my life, what a school , My first year I already know what is Nextjs",
  openGraph:
  {
  title: "This is my Next-js class",
  description: "ISTAD has change my life, what a school , My first year I already know what is Nextjs",
  images: ['/Thumbnail.jpg'],
  }
}

export default function Home() {
  return (
   <section>
    សួស្តីប្អូនៗទាំងអស់គ្នា
    <h2> hello Cambodia</h2>

    {/* using button from shadcn ui */}
    <Button className={'bg-red-500'}>Button</Button>

    {/* calling card component */}
     <CardDemo/>
     
   </section>
  );
}
