import { useEffect, useState } from "react";

// Animates a number from 0 up to `end` once `active` becomes true.
export function useCountUp(end, active, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // ease-out
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, active, duration]);

  return value;
}