import AnimatedListDemo from "@/components/shadcn-space/animated-list/animated-list-01";
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

export default function AboutPage() {
  return (
    <div className="text-red-500">
      ស្វាគមន៍មកកាន់មេរៀន ណិច Welcome To About Page ❤️
      <AnimatedListDemo/>

    </div>
  )
}
