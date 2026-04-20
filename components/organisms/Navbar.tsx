import { Logo } from "../atoms/Logo";
import { NavbarNavigation } from "../molecules/NavbarNavigation";

interface NavbarProps {
  bgColor?: "dark" | "light";
  textColor?: "dark" | "light";
}

export function Navbar({ bgColor = "light", textColor }: NavbarProps) {
  const bgColorClass = {
    dark: "bg-black",
    light: "bg-white",
  };
  return (
    <div
      className={`w-full ${bgColorClass[bgColor]} border-b border-primary/30`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo color={textColor} />
        <NavbarNavigation textColor={textColor} />
      </div>
    </div>
  );
}
