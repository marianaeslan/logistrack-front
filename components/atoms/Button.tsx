import { ButtonHTMLAttributes } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "dashboard" | "search" | "add";
  icon?: boolean;
  text: string;
  size: "small" | "medium" | "large";
}

export function Button({
  className,
  variant,
  icon = false,
  text,
  size = "medium",
  ...buttonProps
}: BtnProps) {
  const variants = {
    dashboard: <TbLayoutDashboardFilled size={20} />,
    search: <BiSolidSearchAlt2 size={20} />,
    add: <FaCirclePlus size={20} />,
  };

  const variantClass =
    "bg-primary text-white rounded-md hover:bg-secondary hover:text-black transition-colors duration-300 inline-flex items-center gap-2 cursor-pointer";

  const sizeClasses = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  return (
    <button
      className={`${variantClass} ${sizeClasses[size]} ${className || ""}`}
      {...buttonProps}
    >
      {icon && variants[variant]}
      {text}
    </button>
  );
}
