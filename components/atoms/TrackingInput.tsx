import { BiSearchAlt2 } from "react-icons/bi";
import type { InputHTMLAttributes } from "react";

interface TrackingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
  icon?: boolean;
}

export function TrackingInput({
  label,
  placeholder,
  icon,
  ...props
}: TrackingInputProps) {
  return (
    <div className="space-y-2 w-full max-w-sm">
      {label && (
        <label className="block text-sm font-medium text-grey">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-grey">
            <BiSearchAlt2 />
          </div>
        )}
        <input
          type="text"
          placeholder={placeholder}
          className={`bg-background text-foreground placeholder:text-grey border border-grey/30 focus:outline-none py-3 pr-4 rounded-md w-full transition-colors duration-300 focus:border-green-700 focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 ${
            icon ? "pl-10" : "pl-4"
          }`}
          {...props}
        />
      </div>
    </div>
  );
}
