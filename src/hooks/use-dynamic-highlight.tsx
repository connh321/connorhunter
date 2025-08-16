import React, { useEffect } from "react";
import { annotate } from "rough-notation";

type HighlightRef = {
  ref: React.RefObject<HTMLElement | HTMLButtonElement | null>;
  type:
    | "highlight"
    | "underline"
    | "box"
    | "circle"
    | "strike-through"
    | "bracket";
  color: string;
  hover?: boolean;
};

const useDynamicHighlight = (refs: HighlightRef[]) => {
  useEffect(() => {
    const annotations: ReturnType<typeof annotate>[] = [];
    const hoverCleanupFns: (() => void)[] = [];

    refs.forEach(({ ref, type, color, hover }) => {
      if (!ref.current) return;

      const annotation = annotate(ref.current, {
        type,
        color,
        padding: 2,
      });

      annotations.push(annotation);

      if (hover) {
        // Only show/hide on hover
        const el: HTMLElement | HTMLButtonElement = ref.current;
        const show = () => annotation.show();
        const hide = () => annotation.hide();

        el.addEventListener("mouseenter", show);
        el.addEventListener("mouseleave", hide);

        hoverCleanupFns.push(() => {
          el.removeEventListener("mouseenter", show);
          el.removeEventListener("mouseleave", hide);
        });
      } else {
        annotation.show();
      }
    });

    return () => {
      annotations.forEach((a) => a.remove());
      hoverCleanupFns.forEach((fn) => fn());
    };
  }, [refs]);
};

export default useDynamicHighlight;
