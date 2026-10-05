import Image from "next/image";
import { cn } from "@/lib/cn";

export function PhoneFrame({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("mx-auto w-full max-w-[280px]", className)}>
      <div className="relative rounded-[2rem] border-[10px] border-primary bg-primary shadow-[0_20px_40px_-12px_rgba(6,21,52,0.35)] overflow-hidden aspect-[9/19]">
        <div className="absolute top-0 inset-x-0 h-6 bg-primary z-10 flex justify-center">
          <div className="w-20 h-4 bg-black/40 rounded-b-xl" />
        </div>
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="280px" />
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-text-muted text-center">{caption}</figcaption> : null}
    </figure>
  );
}
