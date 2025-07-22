import Image from "next/image";

export default function FeatureSection() {
  return (
    <section
      id="feature"
      className="p-4 xl:px-28 md:p-12 pt-24 md:pt-40  z-20 flex flex-col relative gap-12 md:gap-32 overflow-hidden"
    >
      <h2
        className="font-semibold mx-auto text-main-text text-[28px] sm:text-[42px] md:text-[56px] xl:text-[96px] md:pb-4 relative
  after:content-[''] after:absolute after:bottom-[-20px] after:left-1/2 after:-translate-x-1/2 
  after:w-[50px] sm:after:w-[80px] md:after:w-[100px] xl:after:w-[140px]
  after:h-[8px] sm:after:h-[12px] md:after:h-[16px] xl:after:h-[24px]
  after:rounded-full
  after:bg-gradient-to-b after:from-[#B2EBF2] after:to-[#D1C4E9]"
      >
        Feature
      </h2>

      {/* First feature */}

      <div className="flex flex-col gap-4 md:gap-12 lg:gap-24">
        <div className="flex items-center justify-center gap-8 md:gap-16">
          <div className="flex-1">
            <Image
              src={"/FeatureFirstImg.png"}
              alt="FeatureFirstImg"
              width={930}
              height={1080}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <span
                className="rounded-full bg-[#006064] 
    min-w-[16px] min-h-[16px] sm:min-w-[20px] sm:min-h-[20px] 
    md:min-w-[25px] md:min-h-[25px] lg:min-w-[30px] lg:min-h-[30px] xl:min-w-[35px] xl:min-h-[35px]
    "
              ></span>
              <h3 className="text-main-text font-semibold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[60px] xl:text-[72px] ">
                Vivamus sit amet interdum
              </h3>
            </div>
            <p className="text-main-text  text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[42px]">
              Maecenas nisl libero, tincidunt id odio id, feugiat vulputate
              quam. Vestibulum feugiat rhoncus metus.
            </p>
          </div>
        </div>
      </div>

      {/* Second feature */}

      <div className="flex flex-col gap-4 md:gap-12 lg:gap-24">
        <div className="flex items-center justify-center gap-8 md:gap-16">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <span
                className="rounded-full bg-[#006064] 
    min-w-[16px] min-h-[16px] sm:min-w-[20px] sm:min-h-[20px] 
    md:min-w-[25px] md:min-h-[25px] lg:min-w-[30px] lg:min-h-[30px] xl:min-w-[35px] xl:min-h-[35px]
    "
              ></span>
              <h3 className="text-main-text font-semibold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[60px] xl:text-[72px] ">
                Vivamus sit amet interdum
              </h3>
            </div>
            <p className="text-main-text  text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[42px]">
              Maecenas nisl libero, tincidunt id odio id, feugiat vulputate
              quam. Vestibulum feugiat rhoncus metus.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={"/FeatureSecondImg.png"}
              alt="FeatureSecondImg"
              width={930}
              height={1080}
            />
          </div>
        </div>
      </div>

      {/* Third feature */}

      <div className="flex gap-4 md:gap-12 lg:gap-24 justify-center">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
          <div className="flex-1 flex flex-col items-center gap-4 md:gap-8">
            <div className="flex justify-center gap-4">
              <h3 className="text-main-text font-semibold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[60px] xl:text-[72px] ">
                Vivamus sit amet interdum
              </h3>
            </div>
            <span
              className="block rounded-full bg-[#006064] 
    w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] 
    md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px]
    "
            ></span>
            <p className="text-main-text  text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[42px]">
              Vestibulum sit amet tortor sit amet libero lobortis semper at et
              odio.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={"/FeatureThirdImg.png"}
              alt="FeatureThirdImg"
              width={1700}
              height={1200}
            />
          </div>
        </div>
      </div>

      {/* Decor Waves */}
      <div
        className="z-[-40] absolute bottom-[-15%] right-0  pointer-events-none 
  w-[100%] h-[100%]
  
"
      >
        {/* First layer */}
        <Image
          src="/FeatureWaveBottom.svg"
          alt="FeatureWaveBottom"
          width={300}
          height={300}
          className="absolute top-0 right-0 w-full h-full z-[-30]"
        />
        {/* Second layer */}
        <Image
          src="/FeatureWaveTop.svg"
          alt="FeatureWaveTop"
          width={300}
          height={300}
          className="absolute top-24 right-0 w-full h-full opacity-80 z-[-20]"
        />
      </div>
    </section>
  );
}
