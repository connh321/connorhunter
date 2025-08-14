import { renderHook } from "@testing-library/react";
import useDynamicHighlight from "./use-dynamic-highlight";
import React from "react";

// Mock rough-notation
const mockShow = jest.fn();
const mockHide = jest.fn();
const mockAnnotate = jest
  .fn()
  .mockReturnValue({ show: mockShow, hide: mockHide });
const mockAnnotationGroup = jest.fn().mockReturnValue({ show: jest.fn() });

jest.mock("rough-notation", () => ({
  annotate: (...args: never[]) => mockAnnotate(...args),
  annotationGroup: (...args: never[]) => mockAnnotationGroup(...args),
}));

describe("useDynamicHighlight", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call annotate for each non-hover ref", () => {
    const ref1 = {
      current: document.createElement("span"),
    } as React.RefObject<HTMLSpanElement>;
    const ref2 = {
      current: document.createElement("span"),
    } as React.RefObject<HTMLSpanElement>;

    renderHook(() =>
      useDynamicHighlight([
        { ref: ref1, type: "highlight", color: "#f3ced1" },
        { ref: ref2, type: "highlight", color: "#e6d4fa" },
      ]),
    );

    expect(mockAnnotate).toHaveBeenCalledTimes(2);
    expect(mockAnnotationGroup).toHaveBeenCalledTimes(1); // Group show called
  });

  it("should add hover listeners when hover=true", () => {
    const span = document.createElement("span");
    const ref = { current: span } as React.RefObject<HTMLSpanElement>;

    renderHook(() =>
      useDynamicHighlight([
        { ref, type: "highlight", color: "#f3ced1", hover: true },
      ]),
    );

    const mouseEnter = new Event("mouseenter");
    const mouseLeave = new Event("mouseleave");

    span.dispatchEvent(mouseEnter);
    span.dispatchEvent(mouseLeave);

    expect(mockShow).toHaveBeenCalled();
    expect(mockHide).toHaveBeenCalled();
  });

  it("should clean up hover listeners on unmount", () => {
    const span = document.createElement("span");
    const ref = { current: span } as React.RefObject<HTMLSpanElement>;

    const { unmount } = renderHook(() =>
      useDynamicHighlight([
        { ref, type: "highlight", color: "#f3ced1", hover: true },
      ]),
    );

    const removeSpy = jest.spyOn(span, "removeEventListener");

    unmount();

    expect(removeSpy).toHaveBeenCalledWith("mouseenter", expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith("mouseleave", expect.any(Function));
  });
});
