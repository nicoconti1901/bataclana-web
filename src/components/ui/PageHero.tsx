import Image from "next/image";

type PageHeroProps = {
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
};

export function PageHero({
  title,
  lede,
  image,
  imageAlt,
  objectPosition = "center",
}: PageHeroProps) {
  return (
    <header className="relative min-h-[58svh] overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        style={{ objectPosition }}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
      <div className="relative z-10 mx-auto flex min-h-[58svh] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 md:px-6 md:pb-16">
        <h1 className="font-display on-photo max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.9]">
          {title}
        </h1>
        <p className="on-photo-muted mt-5 max-w-xl text-base leading-relaxed md:text-lg">
          {lede}
        </p>
      </div>
    </header>
  );
}
