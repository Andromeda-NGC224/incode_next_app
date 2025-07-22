import Image from "next/image";

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="w-full z-10">
      <div>
        <Image
          src="/ShowcaseMainImg.png"
          alt="ShowcaseMainImg"
          width={2500}
          height={2900}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
