import { ButtonHTMLAttributes } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "dashboard" | "search" | "add";
  icon?: boolean;
  text: string;
}

export function BtnPrimary({
  className,
  variant,
  icon = false,
  text,
  ...buttonProps
}: BtnProps) {
  const variants = {
    dashboard: <TbLayoutDashboardFilled size={20} />,
    search: <BiSolidSearchAlt2 size={20} />,
    add: <FaCirclePlus size={20} />,
  };

  const variantClass =
    "bg-primary text-white rounded-md px-4 py-2 hover:bg-secondary hover:text-black transition-colors duration-300 flex items-center gap-2 cursor-pointer";

  return (
    <button className={`${variantClass} ${className || ""}`} {...buttonProps}>
      {icon && variants[variant]}
      {text}
    </button>
  );
}
