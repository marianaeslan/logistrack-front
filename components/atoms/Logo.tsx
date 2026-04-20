import Image from "next/image";

interface LogoProps {
  color?: "dark" | "light";
}

export function Logo({ color = "light" }: LogoProps) {
  return (
    <div
      className={`flex items-center gap-3 justify-items-center ${color === "dark" ? "text-white" : "text-black"}`}
    >
      <div>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={24}
          height={24}
          className="object-cover"
        />
      </div>
      <div className="text-lg font-bold">
        <p className={`${color === "light" ? "text-white" : "text-black"}`}>
          Logis
          <span className="text-primary">track</span>
        </p>
      </div>
    </div>
  );
}
