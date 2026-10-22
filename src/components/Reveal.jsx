import { useInView } from "../hooks/useInView";

// Wrap anything in <Reveal> and it fades/slides in when scrolled into view.
// direction: "up" | "left" | "right" | "zoom"   delay: milliseconds
export default function Reveal({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className = "",
  children,
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${inView ? "in" : ""} ${className}`.trim()}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}