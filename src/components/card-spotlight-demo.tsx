import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function CardSpotlightDemo() {
  return (
    <CardSpotlight className="group/spotlight relative h-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-8 shadow-2xl backdrop-blur-lg lg:h-96">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white">
          About RE:INVENT
        </h2>
        <p className="mt-4 text-base text-neutral-300">
          We are a hybrid of innovation, combining expert service delivery with
          product-driven solutions. Our team of specialists is dedicated to
          bringing your ideas to life, from stunning UI/UX designs to powerful
          AI models and flawless mobile applications.
        </p>
      </div>
    </CardSpotlight>
  );
}
