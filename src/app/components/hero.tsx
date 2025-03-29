import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        <div className="my-auto">
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none" />
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            INVITACIONES DIGITALES
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Mantén al tanto a tus invitados, la información de tu evento en una
            invitación inteligente, de una manera deslumbrante, elegante e
            interactiva.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Quiero que me contacten
            </Button>
          </div>
        </div>
        <div className="w-full bg-accent rounded-xl items-center gap-4">
          <Image
            src="/hero.png"
            alt="Initaciones"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
