import BrandMark from "./BrandMark";

export default function Logo({ className = "", textClassName = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <BrandMark className="h-full w-auto" />
      <span className={`font-script text-2xl leading-none ${textClassName}`}>
        Amor à Palavra
      </span>
    </span>
  );
}
