"use client";
import React, { ReactElement, useRef } from "react";
import useDynamicHighlight from "@/hooks/use-dynamic-highlight";

type HighlightType =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "bracket";

interface HighlightElementProps {
  children: React.ReactNode;
  type: HighlightType;
  color: string;
  hover?: boolean;
  className?: string;
}

/**
 * Client wrapper component that adds rough notation highlight to a single child element.
 * Simpler alternative to HighlightWrapper for single elements.
 *
 * @param children - Content that should receive highlight
 * @param type - Type of highlight annotation
 * @param color - Color of the highlight
 * @param hover - Whether highlight should only show on hover
 * @param className - CSS class for the wrapper
 *
 * @example
 * // In a server component:
 * <HighlightElement type="box" color="#fbe894" hover={true}>
 *   <Link href="/contact">Contact Me</Link>
 * </HighlightElement>
 */
const HighlightElement = ({
  children,
  type,
  color,
  hover = false,
  className,
}: HighlightElementProps): ReactElement => {
  const ref = useRef<HTMLSpanElement>(null);

  useDynamicHighlight([
    { ref: ref as React.RefObject<HTMLElement>, type, color, hover },
  ]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
};

export default HighlightElement;
