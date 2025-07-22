export interface BurgerMenuOverlayProps {
  navItems: { id: string; label: string }[];
  onClose: () => void;
  activeSection: string | null;
}
