import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="p-4 md:p-12 xl:px-28 z-20 flex relative ">
      {/* Decoration */}

      <div className="absolute top-4 md:top-16 left-0 w-[24px] sm:w-[32px] md:w-[42px] xl:w-[90px] ">
        <Image src={"/Triangle.svg"} alt="Triangle" width={90} height={70} />
      </div>
      <div className="absolute bottom-25 md:bottom-25 right-[25%] w-[50px] sm:w-[60px] md:w-[120px] xl:w-[200px] ">
        <Image src={"/Oval.svg"} alt="Oval" width={200} height={200} />
      </div>
      <div className="absolute xl:[bottom:-260px] md:[bottom:-140px] sm:[bottom:-100px] bottom-[-60px] left-[5%] w-[50px] sm:w-[80px] md:w-[150px] xl:w-[250px] z-[-10]">
        <Image
          src={"/DotDecoration.png"}
          alt="DotDecoration"
          width={250}
          height={250}
        />
      </div>

      {/* Content */}

      <div className="flex-1">
        <h1 className="text-main-text text-[24px] sm:text-[28px] md:text-[36px] xl:text-[58px] 2xl:text-[64px] pb-6 md:pb-4">
          Sed Imperdiet Enim li Vitae
          <span className="text-purple-text font-bold">Viverra Justo</span>
        </h1>
        <p className="text-main-text text-[16px] sm:text-[22px] md:text-[24px] xl:text-[36px]">
          Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum sit amet
          tortor sit amet libero lobortis.
        </p>
        <div className="flex gap-4 md:gap-8 mt-2 md:mt-4">
          <div>
            <Image
              src={"/AppleDownload.png"}
              alt="AppleDownload"
              width={320}
              height={100}
            />
          </div>
          <div>
            <Image
              src={"/GoogleDownload.png"}
              alt="GoogleDownload"
              width={320}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 z-20">
        <Image
          src={"/mobile_banner.png"}
          alt="mobile_banner"
          width={1200}
          height={900}
        />
      </div>
    </section>
  );
}
