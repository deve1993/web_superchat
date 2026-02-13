import { Bloom } from "./bloom";

const drifts = ["bloom-drift-1", "bloom-drift-2", "bloom-drift-3"];

const blooms = [
  // --- Hero (0-8%) ---
  { color: "rgb(79, 96, 250)", width: 250, height: 140, opacity: 0.6, className: "top-[0%] left-[0%]", drift: 0 },
  { color: "rgb(139, 92, 246)", width: 250, height: 140, opacity: 0.6, className: "top-[0%] right-[0%]", drift: 1 },
  { color: "rgb(37, 211, 102)", width: 250, height: 180, opacity: 0.3, className: "top-[5%] right-[5%]", drift: 2 },
  { color: "rgb(6, 182, 212)", width: 200, height: 140, opacity: 0.25, className: "top-[6%] left-[5%]", drift: 1 },

  // --- About (8-18%) ---
  { color: "rgb(139, 92, 246)", width: 450, height: 350, opacity: 0.5, className: "top-[9%] left-[-3%]", drift: 2 },
  { color: "rgb(6, 182, 212)", width: 320, height: 220, opacity: 0.4, className: "top-[12%] right-[10%]", drift: 0 },
  { color: "rgb(37, 211, 102)", width: 250, height: 180, opacity: 0.3, className: "top-[15%] right-[30%]", drift: 1 },
  { color: "rgb(245, 158, 11)", width: 220, height: 160, opacity: 0.25, className: "top-[17%] left-[20%]", drift: 2 },

  // --- Features (18-28%) ---
  { color: "rgb(225, 48, 108)", width: 350, height: 250, opacity: 0.35, className: "top-[19%] right-[-2%]", drift: 1 },
  { color: "rgb(245, 158, 11)", width: 300, height: 200, opacity: 0.4, className: "top-[21%] left-[3%]", drift: 0 },
  { color: "rgb(37, 211, 102)", width: 380, height: 260, opacity: 0.35, className: "top-[25%] left-[0%]", drift: 2 },
  { color: "rgb(139, 92, 246)", width: 280, height: 200, opacity: 0.4, className: "top-[27%] right-[15%]", drift: 1 },

  // --- MidCta (28-34%) ---
  { color: "rgb(79, 96, 250)", width: 320, height: 200, className: "top-[29%] left-[38%]", drift: 1 },
  { color: "rgb(225, 48, 108)", width: 280, height: 200, opacity: 0.35, className: "top-[30%] left-[2%]", drift: 2 },
  { color: "rgb(6, 182, 212)", width: 250, height: 180, opacity: 0.3, className: "top-[32%] right-[5%]", drift: 0 },

  // --- BuiltForYou (34-44%) ---
  { color: "rgb(6, 182, 212)", width: 400, height: 280, opacity: 0.4, className: "top-[35%] left-[-3%]", drift: 0 },
  { color: "rgb(245, 158, 11)", width: 300, height: 220, opacity: 0.35, className: "top-[38%] right-[5%]", drift: 2 },
  { color: "rgb(225, 48, 108)", width: 280, height: 200, opacity: 0.3, className: "top-[40%] right-[25%]", drift: 1 },
  { color: "rgb(139, 92, 246)", width: 250, height: 180, opacity: 0.35, className: "top-[43%] left-[10%]", drift: 2 },

  // --- Benefits (44-54%) ---
  { color: "rgb(139, 92, 246)", width: 450, height: 320, opacity: 0.45, className: "top-[45%] right-[-3%]", drift: 1 },
  { color: "rgb(37, 211, 102)", width: 320, height: 240, opacity: 0.4, className: "top-[47%] left-[2%]", drift: 0 },
  { color: "rgb(6, 182, 212)", width: 280, height: 200, opacity: 0.35, className: "top-[50%] left-[25%]", drift: 2 },
  { color: "rgb(245, 158, 11)", width: 250, height: 180, opacity: 0.3, className: "top-[53%] right-[10%]", drift: 1 },

  // --- Indicators (54-62%) ---
  { color: "rgb(79, 96, 250)", width: 500, height: 350, opacity: 0.5, className: "top-[55%] right-[-3%]", drift: 2 },
  { color: "rgb(245, 158, 11)", width: 350, height: 250, opacity: 0.35, className: "top-[57%] left-[3%]", drift: 0 },
  { color: "rgb(225, 48, 108)", width: 280, height: 200, opacity: 0.3, className: "top-[60%] left-[30%]", drift: 1 },

  // --- Testimonials (62-72%) ---
  { color: "rgb(37, 211, 102)", width: 350, height: 250, opacity: 0.4, className: "top-[63%] left-[-2%]", drift: 1 },
  { color: "rgb(139, 92, 246)", width: 300, height: 220, opacity: 0.4, className: "top-[65%] right-[5%]", drift: 2 },
  { color: "rgb(6, 182, 212)", width: 280, height: 200, opacity: 0.35, className: "top-[68%] left-[40%]", drift: 0 },
  { color: "rgb(225, 48, 108)", width: 220, height: 160, opacity: 0.3, className: "top-[70%] right-[25%]", drift: 1 },

  // --- HowToUse (72-80%) ---
  { color: "rgb(79, 96, 250)", width: 400, height: 280, opacity: 0.5, className: "top-[73%] right-[-2%]", drift: 0 },
  { color: "rgb(245, 158, 11)", width: 320, height: 240, opacity: 0.4, className: "top-[74%] left-[5%]", drift: 2 },
  { color: "rgb(37, 211, 102)", width: 280, height: 200, opacity: 0.35, className: "top-[77%] left-[30%]", drift: 1 },
  { color: "rgb(225, 48, 108)", width: 250, height: 180, opacity: 0.3, className: "top-[79%] right-[15%]", drift: 2 },

  // --- Pricing (80-88%) ---
  { color: "rgb(79, 96, 250)", width: 300, height: 200, className: "top-[81%] left-[40%]", drift: 1 },
  { color: "rgb(139, 92, 246)", width: 400, height: 300, opacity: 0.45, className: "top-[83%] right-[5%]", drift: 2 },
  { color: "rgb(245, 158, 11)", width: 320, height: 240, opacity: 0.35, className: "top-[85%] left-[0%]", drift: 0 },
  { color: "rgb(6, 182, 212)", width: 260, height: 180, opacity: 0.3, className: "top-[87%] left-[25%]", drift: 1 },

  // --- Contact / FinalCta (88-94%) ---
  { color: "rgb(37, 211, 102)", width: 300, height: 220, opacity: 0.3, className: "top-[90%] right-[5%]", drift: 1 },

  // --- Footer (94-100%) ---
  { color: "rgb(6, 182, 212)", width: 350, height: 250, opacity: 0.35, className: "top-[95%] right-[5%]", drift: 2 },
  { color: "rgb(139, 92, 246)", width: 300, height: 220, opacity: 0.35, className: "top-[97%] left-[3%]", drift: 0 },
  { color: "rgb(245, 158, 11)", width: 250, height: 180, opacity: 0.3, className: "top-[99%] left-[40%]", drift: 1 },
];

export function PageBlooms() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {blooms.map((b, i) => (
        <Bloom
          key={i}
          color={b.color}
          width={b.width}
          height={b.height}
          opacity={b.opacity}
          className={`${b.className} ${drifts[b.drift]}`}
        />
      ))}
    </div>
  );
}
