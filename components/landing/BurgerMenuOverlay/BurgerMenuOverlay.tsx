import { SmoothScrollLink } from "@/components/ui/SmoothScrollLink";
import { BurgerMenuOverlayProps } from "./types";
import css from "./BurgerMenuOverlay.module.css";

export default function BurgerMenuOverlay({
  navItems,
  onClose,
  activeSection,
}: BurgerMenuOverlayProps) {
  return (
    <div
      className={`fixed inset-0 bg-paper bg-opacity-80 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-6 text-white text-xl ${css.overlay}`}
    >
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

      <button
        onClick={onClose}
        className="mt-8 text-sm underline cursor-pointer"
      >
        Close
      </button>
    </div>
  );
}
