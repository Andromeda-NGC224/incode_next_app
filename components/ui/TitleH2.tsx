import clsx from "clsx";
import { ReactNode } from "react";

interface TitleH2Props {
  title: ReactNode;
  styles?: string;
}

export default function TitleH2({ title, styles }: TitleH2Props) {
  return (
    <h2
      className={clsx(
        "font-semibold mx-auto text-main-text text-[28px] sm:text-[42px] md:text-[56px] xl:text-[96px] md:pb-4 relative",
        "after:content-[''] after:absolute after:bottom-[-20px] after:left-1/2 after:-translate-x-1/2 after:w-[50px] sm:after:w-[80px] md:after:w-[100px] xl:after:w-[140px] after:h-[8px] sm:after:h-[12px] md:after:h-[16px] xl:after:h-[24px] after:rounded-full after:bg-gradient-to-b after:from-[#B2EBF2] after:to-[#D1C4E9]",
        styles
      )}
    >
      {title}
    </h2>
  );
}
