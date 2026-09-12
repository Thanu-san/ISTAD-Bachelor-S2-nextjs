import { CardDemo } from "@/components/cards/CardDemoComponent";
import { Button } from "@/components/ui/button";

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
