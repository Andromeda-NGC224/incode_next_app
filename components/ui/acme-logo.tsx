import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "../../lib/fonts/fonts";
import clsx from "clsx";

export default function AcmeLogo() {
  return (
    <div
      className={clsx(
        lusitana.className,
        "flex flex-row items-center leading-none text-white"
      )}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
