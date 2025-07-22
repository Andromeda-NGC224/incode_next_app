import { SmoothScrollLink } from "@/components/ui/SmoothScrollLink";
import { BurgerMenuOverlayProps } from "./types";
import { IoClose } from "react-icons/io5";

export default function BurgerMenuOverlay({
  navItems,
  onClose,
  activeSection,
}: BurgerMenuOverlayProps) {
  return (
    <div className="fixed inset-0 bg-paper bg-opacity-80 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-6 text-white text-xl animate-slideDown">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-3xl text-white hover:text-purple-text transition-colors cursor-pointer"
      >
        <IoClose />
      </button>

      {navItems.map(({ id, label }) => (
        <SmoothScrollLink
          key={id}
          targetId={id}
          onClick={onClose}
          className={`${
            activeSection === id
              ? "text-violet-400 underline"
              : "hover:text-purple-text"
          }`}
        >
          {label}
        </SmoothScrollLink>
      ))}
    </div>
  );
}
