export function SectionSubtitle({ text }: { text: string }) {
  return (
    <div className="section-subtitle mb-4">
      <img src="/icons/sub-title-left.svg" alt="" className="h-3 w-auto" />
      <span>{text}</span>
      <img src="/icons/sub-title-right.svg" alt="" className="h-3 w-auto" />
    </div>
  );
}
