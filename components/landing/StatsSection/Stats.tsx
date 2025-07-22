import clsx from "clsx";
import { stats } from "./config";

export default function Stats() {
  return (
    <section className="mx-auto mt-25 md:mt-40 lg:mt-60">
      <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-12 ">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={clsx(
              "relative flex flex-col items-center justify-center text-center",
              "after:content-[''] after:absolute",
              "after:right-0 after:top-1/2 after:-translate-y-1/2",
              "after:w-[3px] after:h-[50%]",
              "after:bg-purple-text",
              index === stats.length - 1
                ? "after:hidden"
                : "pr-3 sm:pr-4 lg:pr-12"
            )}
          >
            <div className="text-pink-text font-semibold text-[20px] sm:text-[32px] md:text-[36px] xl:text-[64px] 2xl:text-[86px]">
              {stat.value}
            </div>
            <div className="flex items-center gap-2 sm:gap-4  text-main-text text-[16px] sm:text-[24px] md:text-[32px] xl:text-[56px] mt-2">
              <span>{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
