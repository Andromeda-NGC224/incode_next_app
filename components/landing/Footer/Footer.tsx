import Image from "next/image";
import { footerLinks, socialLinks } from "./config";
import Link from "next/link";
import { FaChevronDown, FaEarthAmericas } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="p-4 pb-10 xl:px-28 md:p-12 pt-16 md:pt-24 pb-8 md:pb-24  flex flex-col  overflow-hidden text-main-text bg-[#572d91]"
    >
      {/* Decoration Waves */}
      <div
        className="absolute right-0 bottom-[5%] sm:bottom-[-3%] md:bottom-[0]  lg:bottom-[-8%] xl:bottom-[-15%] 2xl:bottom-[-20%]  pointer-events-none 
  w-[100%] h-[100%]
  
"
      >
        {/* First layer */}
        <Image
          src="/FooterBg1.svg"
          alt="FooterBg1"
          width={300}
          height={300}
          className="absolute w-full h-full opacity-80 "
        />
        {/* Second layer */}
        <Image
          src="/FooterBg2.svg"
          alt="FooterBg2"
          width={300}
          height={300}
          className="absolute w-full h-full opacity-80"
        />
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col gap-12 md:gap-32">
        <h3 className="text-main-text font-bold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[58px] xl:text-[66px] text-center">
          What are you waiting for? Download Now!
        </h3>

        <div className="flex justify-center gap-4 md:gap-8">
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

        <div className="mx-auto mt-4 md:mt-6 lg:mt-8 flex flex-col xl:flex-row xl:justify-between gap-16 md:gap-18 lg:gap-20 xl:gap-24">
          {/* Logo */}
          <div className="flex flex-col items-center gap-1">
            <Link
              href={"/dashboard"}
              className="w-[60px] md:w-[90px] xl:w-[120px] "
            >
              <Image
                src="/logoImg.png"
                alt="Logo"
                width={186}
                height={190}
                className="w-full h-auto"
              />
            </Link>
            <span className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]  font-semibold">
              Mobile
            </span>

            <p className="justify-end text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] mt-1 lg:mt-8 text-center">
              © Luxi Theme 2019
            </p>
          </div>

          {/* Link Columns */}
          <div className="flex flex-col sm:flex-row justify-center gap-16 md:gap-18 lg:gap-20 xl:gap-24">
            {Object.entries(footerLinks).map(([title, items]) => (
              <div
                key={title}
                className="text-center sm:text-left flex flex-col gap-2 sm:gap-3 lg:gap-4"
              >
                <h4 className="font-bold uppercase text-[18px] md:text-[22px] lg:text-[24px] xl:text-[28px]">
                  {title}
                </h4>
                <ul className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                  {items.map((text, i) => (
                    <li
                      key={i}
                      className="transition-colors duration-200 cursor-pointer hover:text-purple-300 text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px]"
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social + Language */}
          <div className="flex flex-col items-center xl:items-end gap-4 lg:gap-8">
            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex items-center justify-center transition-colors duration-200 rounded-full bg-blue hover:bg-purple-dark w-8 h-8 text-[14px] sm:w-10 sm:h-10 sm:text-[22px] md:w-12 md:h-12 md:text-[28px] xl:w-[60px] xl:h-[60px] xl:text-[40px]`}
                >
                  <Icon />
                </Link>
              ))}
            </div>

            {/* Language Select */}
            <div className="relative w-fit">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-main-text">
                <FaEarthAmericas className="mr-1 lg:text-[24px] xl:text-[28px] text-purple-text" />
              </span>
              <select className="border border-purple-text text-main-text bg-[#572f90] lg:text-[24px] py-2 lg:py-3 rounded-xl appearance-none pl-10 pr-10 lg:pl-14 lg:pr-14 cursor-pointer outline-none hover:bg-purple-dark transition-colors duration-200">
                <option>English - En</option>
                <option>Українська - Ua</option>
              </select>
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-white">
                <FaChevronDown className="text-purple-text" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
