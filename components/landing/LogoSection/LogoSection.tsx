import Image from "next/image";

export default function LogoSection() {
  return (
    <section className="p-4 xl:px-28 md:p-12 pt-16 md:pt-24 flex flex-col items-center gap-8 md:gap-16 xl:gap-24">
      <h2 className="text-main-text font-semibold text-[22px] sm:text-[28px] md:text-[36px] xl:text-[64px]">
        Nulla lobortis nunc vitae nisi
      </h2>
      <div className="flex gap-4 md:gap-8 xl:gap-12">
        <div>
          <Image
            src="/LogoSectionImg.png"
            alt="LogoSectionImg"
            width={1400}
            height={130}
          />
        </div>
      </div>
    </section>
  );
}
