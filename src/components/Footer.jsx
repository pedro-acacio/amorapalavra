import Logo from "./Logo";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, LOCAL, NAV_LINKS } from "../data";

export default function Footer() {
  return (
    <footer className="px-6 py-14 bg-vinho">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Logo className="h-8 opacity-95" textClassName="text-creme" />
          <p className="text-xs text-creme/50">Cadernos e planners que te aproximam da Palavra.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-creme/70 hover:text-creme">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-creme/70">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-creme">
            {INSTAGRAM_HANDLE}
          </a>
          <span>{LOCAL}</span>
        </div>
      </div>

      <p className="text-center text-xs text-creme/40 mt-10">
        © {new Date().getFullYear()} Amor à Palavra · {LOCAL}
      </p>
    </footer>
  );
}
