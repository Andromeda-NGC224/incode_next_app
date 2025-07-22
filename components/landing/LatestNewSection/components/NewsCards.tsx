import Image from "next/image";
import { cards } from "./config";

export default function NewsCards() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-28">
      <div className="flex-1 bg-paper rounded-3xl px-4 pb-4 md:px-8 md:pb-10 w-full max-w-xs md:max-w-sm lg:max-w-lg shadow-lg relative overflow-visible pt-[150px] md:pt-[300px]  ">
        <div className=" rounded-3xl mb-4 overflow-hidden w-[90%] h-[60%] absolute top-[-40px] left-1/2 -translate-x-1/2 ">
          <Image
            src={"/BirdWinter.jpg"}
            alt={"BirdWinter"}
            width={150}
            height={150}
            className=" object-cover w-full h-full"
          />
        </div>

        <h3 className="text-main-text  text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] mb-2 md:mb-4">
          HEADLINE
        </h3>
        <p className="font-semibold text-main-text  text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] mb-2 md:mb-4">
          Sed imperdiet enim ligula, vitae viverra justo porta vel.
        </p>
        <a
          href="#"
          className="text-purple-text hover:text-purple-dark transition-colors duration-200 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]"
        >
          Read more
        </a>
      </div>
      <div className="flex flex-1 flex-col gap-6 md:gap-8 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-1 bg-paper rounded-3xl py-4 pb-4 md:py-8 md:pb-10  w-full max-w-xs md:max-w-sm lg:max-w-lg shadow-lg relative overflow-visible pl-[60px] md:pl-[100px]"
          >
            {card.imageSrc && (
              <div className=" rounded-3xl mb-4 overflow-hidden absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-[10px]">
                <Image
                  src={card.imageSrc}
                  alt={card.headline}
                  width={150}
                  height={150}
                  className=" object-cover w-[80px] h-[80px] md:w-[120px] md:h-[120px] "
                />
              </div>
            )}
            <h3 className="text-main-text  text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] mb-2 md:mb-4">
              {card.headline}
            </h3>
            <p className="font-semibold text-main-text  text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] mb-2 md:mb-4">
              {card.text}
            </p>
            <a
              href="#"
              className="text-purple-text hover:text-purple-dark transition-colors duration-200 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
