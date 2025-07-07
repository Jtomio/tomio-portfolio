import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="font-bold uppercase items-center justify-center">teste</p>
      <div className="">
      <Card>
        <CardHeader>Teste Button shadcn-ui</CardHeader>
        <CardDescription className="flex items-center justify-center p-4">
          <div className="">
            <Button variant={"default"} className="">Aceite</Button>
            </div>
        </CardDescription>
      </Card>
    </div>
    </div>
    
  );
}
