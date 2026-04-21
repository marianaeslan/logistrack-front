import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuClock9 } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";

interface TagProps {
  text: string;
  size: "small" | "medium" | "large";
  color: "delivered" | "outForDelivery" | "pending" | "canceled";
  icon: "outForDelivery" | "delivered" | "pending" | null;
}

export function Tag({ text, size, color, icon }: TagProps) {
  const sizeClasses = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-2 py-1",
    large: "text-base px-2 py-1",
  };
  const colorClasses = {
    delivered: "bg-green-50 text-green-700 border border-green-200",
    outForDelivery: "bg-purple-50 text-purple-700 border border-purple-200",
    pending: "bg-yellow-50 text-yellow-700 border border-yellow-200",
    canceled: "bg-red-50 text-red-700 border border-red-200",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 ${colorClasses[color]}  ${sizeClasses[size]} font-medium rounded-md`}
    >
      {icon && (
        <span className="mr-1">
          {icon === "outForDelivery" && <TbTruckDelivery />}
          {icon === "delivered" && <BsBoxSeam />}
          {icon === "pending" && <LuClock9 />}
        </span>
      )}
      {text}
    </span>
  );
}
