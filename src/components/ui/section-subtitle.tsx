import Image from "next/image";

export function SectionSubtitle({ text }: { text: string }) {
  return (
    <div className="section-subtitle mb-4">
      <Image src="/icons/sub-title-left.svg" alt="" width={48} height={12} className="h-3 w-auto" />
      <span>{text}</span>
      <Image src="/icons/sub-title-right.svg" alt="" width={48} height={12} className="h-3 w-auto" />
    </div>
  );
}
