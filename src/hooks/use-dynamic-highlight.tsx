// src/hooks/useDynamicHighlight.ts
import React, { useEffect } from "react";
import { annotate, annotationGroup } from "rough-notation";

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
  animationDuration?: number;
};

const useDynamicHighlight = (refs: HighlightRef[]) => {
  useEffect(() => {
    const annotations: ReturnType<typeof annotate>[] = [];
    const cleanupFns: (() => void)[] = [];

    refs.forEach(({ ref, type, color, hover, animationDuration }) => {
      if (!ref.current) return;

      const annotation = annotate(ref.current, {
        type,
        color,
        padding: 2,
        animationDuration: animationDuration ?? 800,
      });
      annotations.push(annotation);

      if (hover && ref.current) {
        const el: HTMLElement | HTMLButtonElement = ref.current;
        const show = () => annotation.show();
        const hide = () => annotation.hide();

        el.addEventListener("mouseenter", show);
        el.addEventListener("mouseleave", hide);

        cleanupFns.push(() => {
          el.removeEventListener("mouseenter", show);
          el.removeEventListener("mouseleave", hide);
        });
      }
    });

    // Show all annotations in sequence (only for non-hover ones)
    if (annotations.length > 0 && refs.some((r) => !r.hover)) {
      const nonHoverAnnotations = annotations.filter(
        (_, idx) => !refs[idx].hover,
      );
      const group = annotationGroup(nonHoverAnnotations);
      group.show();
    }

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, [refs]);
};

export default useDynamicHighlight;
