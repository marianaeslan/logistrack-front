import Link from "next/link";

interface NavbarNavigationProps {
  textColor?: "dark" | "light";
}

export function NavbarNavigation({
  textColor = "light",
}: NavbarNavigationProps) {
  const textColorClass = {
    dark: "text-black",
    light: "text-white",
  };

  return (
    <nav
      className={`p-4 font-bold transition-colors duration-600 ease-in ${textColorClass[textColor]}`}
    >
      <div className="flex text-end w-full justify-end items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-primary">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
