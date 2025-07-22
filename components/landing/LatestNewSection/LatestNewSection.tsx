import Image from "next/image";
import { NewsCards } from "./components";

export default function LatestNewSection() {
  return (
    <section className="p-4 pb-20 xl:px-28 md:p-12 pt-16 md:pt-24 pb-8 md:pb-40 xl:pb-100 flex flex-col gap-12 md:gap-32 relative overflow-hidden">
      {/*  Decoration */}

      <div className="absolute top-[21%] md:top-[30%] left-[10%] w-[24px] sm:w-[32px] md:w-[42px] xl:w-[90px] ">
        <Image src={"/Triangle.svg"} alt="Triangle" width={90} height={70} />
      </div>
      <div className="absolute  top-[10%] right-[10%] w-[50px] sm:w-[60px] md:w-[120px] xl:w-[200px] ">
        <Image src={"/Oval.svg"} alt="Oval" width={200} height={200} />
      </div>
      <div className="absolute bottom-[5%] md:bottom-[10%] left-[10%] w-[50px] sm:w-[80px] md:w-[150px] xl:w-[250px] z-1">
        <Image
          src={"/DotDecoration.png"}
          alt="DotDecoration"
          width={250}
          height={250}
        />
      </div>

      {/*  Decoration Waves */}
      <div
        className="absolute right-0 bottom-[-45%] sm:bottom-[-32%]  pointer-events-none 
  w-[100%] h-[100%]
  
"
      >
        {/* First layer */}
        <Image
          src="/LatestNewsSectionWave.svg"
          alt="LatestNewsSectionWave"
          width={300}
          height={300}
          className="absolute w-full h-full "
        />
        {/* Second layer */}
        <Image
          src="/LatestNewsSectionCombined.svg"
          alt="LatestNewsSectionCombined"
          width={300}
          height={300}
          className="absolute w-full h-full opacity-80 "
        />
      </div>

      {/* Content */}

      <h2
        className=" mx-auto text-main-text text-[28px] sm:text-[42px] md:text-[56px] xl:text-[96px] md:pb-4 relative
  after:content-[''] after:absolute after:bottom-[-20px] after:left-1/2 after:-translate-x-1/2 
  after:w-[50px] sm:after:w-[80px] md:after:w-[100px] xl:after:w-[140px]
  after:h-[8px] sm:after:h-[12px] md:after:h-[16px] xl:after:h-[24px]
  after:rounded-full
  after:bg-gradient-to-b after:from-[#B2EBF2] after:to-[#D1C4E9]"
      >
        Latest <span className="font-semibold">News</span>
      </h2>
      <div className="flex flex-col gap-20 md:gap-30 items-center mx-auto">
        <p className="text-main-text  text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[42px] text-center">
          Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus
          auctor.
        </p>
        <NewsCards />
      </div>
    </section>
  );
}
