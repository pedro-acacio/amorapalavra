import logo from "../assets/logo.jpg";

export default function Logo({ className = "", textClassName = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={logo}
        alt="Amor à Palavra"
        className="h-full w-auto aspect-square rounded-full object-cover shadow-sm"
      />
      <span className={`font-script text-2xl leading-none ${textClassName}`}>
        Amor à Palavra
      </span>
    </span>
  );
}
