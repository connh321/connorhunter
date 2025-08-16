import { renderHook } from "@testing-library/react";
import useDynamicHighlight from "./use-dynamic-highlight";
import React from "react";

// Mock rough-notation
const mockShow = jest.fn();
const mockHide = jest.fn();
const mockAnnotate = jest
  .fn()
  .mockReturnValue({ show: mockShow, hide: mockHide, remove: jest.fn() });

jest.mock("rough-notation", () => ({
  annotate: (...args: never[]) => mockAnnotate(...args),
}));

describe("useDynamicHighlight", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call annotate and show for each non-hover ref", () => {
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
    expect(mockShow).toHaveBeenCalledTimes(2);
  });

  it("should not call show on initial render when hover=true", () => {
    const ref = {
      current: document.createElement("span"),
    } as React.RefObject<HTMLSpanElement>;

    renderHook(() =>
      useDynamicHighlight([
        { ref, type: "highlight", color: "#f3ced1", hover: true },
      ]),
    );

    expect(mockAnnotate).toHaveBeenCalledTimes(1);
    expect(mockShow).not.toHaveBeenCalled();
  });

  it("should add and trigger hover listeners when hover=true", () => {
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
    expect(mockShow).toHaveBeenCalledTimes(1);

    span.dispatchEvent(mouseLeave);
    expect(mockHide).toHaveBeenCalledTimes(1);
  });

  it("should clean up hover listeners and annotations on unmount", () => {
    const span = document.createElement("span");
    const ref = { current: span } as React.RefObject<HTMLSpanElement>;

    const { unmount } = renderHook(() =>
      useDynamicHighlight([
        { ref, type: "highlight", color: "#f3ced1", hover: true },
      ]),
    );

    const removeSpy = jest.spyOn(span, "removeEventListener");
    const removeAnnotationSpy = mockAnnotate.mock.results[0].value.remove;

    unmount();

    expect(removeSpy).toHaveBeenCalledWith("mouseenter", expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith("mouseleave", expect.any(Function));
    expect(removeAnnotationSpy).toHaveBeenCalled();
  });
});
