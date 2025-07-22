import Image from "next/image";
import { Accordeon } from "./components";
import { TitleH2 } from "@/components/ui";

export default function FaqSection() {
  return (
    <section id="faq" className="p-4 xl:px-28 md:p-12 flex gap-8 md:gap-32">
      <div className="w-[45%]">
        <TitleH2
          styles="mb-6 md:mb-12 xl:mb-20 pb-10 md:pb-30 after:bottom-0 after:left-[0px] after:-translate-x-[0px] after:w-[50px] sm:after:w-[70px] md:after:w-[90px] xl:after:w-[115px] after:h-[6px] sm:after:h-[8px] md:after:h-[12px] xl:after:h-[12px]"
          title="FAQ"
        />
        <p className="text-main-text mb-6 md:mb-12 xl:mb-20 text-[18px] sm:text-[28px] md:text-[32px] xl:text-[42px] ">
          Vestibulum sit amet tortor sit amet libero lobortis semper at et odio.
        </p>
        <div className="max-w-[80%] ml-auto">
          <Image
            src={"/FaqImg.png"}
            alt="FaqImg"
            width={590}
            height={740}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-[55%]">
        <Accordeon />
      </div>
    </section>
  );
}
