import Image from "next/image";
import { Accordeon } from "./components";

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="p-4 xl:px-28 md:p-12 flex gap-8 md:gap-12 md:gap-32"
    >
      <div className="w-[45%]">
        <h2
          className="font-semibold mb-6 md:mb-12 xl:mb-20 mx-auto text-main-text text-[28px] sm:text-[42px] md:text-[56px] xl:text-[96px] pb-10 md:pb-30 relative
  after:content-[''] after:absolute after:bottom-0 after:left-0
  after:w-[50px] sm:after:w-[70px] md:after:w-[90px] xl:after:w-[115px]
  after:h-[6px] sm:after:h-[8px] md:after:h-[12px] xl:after:h-[12px]
  after:rounded-full
  after:bg-gradient-to-b after:from-[#B2EBF2] after:to-[#D1C4E9]"
        >
          FAQ
        </h2>
        <p className="text-main-text mb-6 md:mb-12 xl:mb-20 text-[18px] sm:text-[28px] md:text-[36px] xl:text-[42px] ">
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
