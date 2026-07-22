import { CONTACT } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-paper-dim md:flex-row">
        <span className="font-display text-base text-paper">
          Lukáš Lasák<span className="text-accent">.</span>
        </span>
        <span className="text-[0.82rem]">
          © {new Date().getFullYear()} · Praha · Vytvořeno s péčí
        </span>
        <a
          href={`mailto:${CONTACT.email}`}
          data-cursor="hover"
          className="text-[0.82rem] transition-colors hover:text-paper"
        >
          {CONTACT.email}
        </a>
      </div>
    </footer>
  );
}
