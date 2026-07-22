import Reveal from "./Reveal";

export default function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: string;
}) {
  return (
    <Reveal blur={false} y={16}>
      <div className="mb-10 flex items-center gap-4 text-paper-dim">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px flex-1 max-w-[60px] bg-line" />
        <span className="text-[0.72rem] uppercase tracking-[0.28em]">
          {children}
        </span>
      </div>
    </Reveal>
  );
}
