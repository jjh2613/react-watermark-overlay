import { useCallback, useLayoutEffect, useState } from "react";

export function useSize<T extends HTMLElement = HTMLElement>() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useCallback((node: T | null) => {
    if (node !== null) {
      const updateSize = () => {
        setSize({ width: node.offsetWidth, height: node.offsetHeight });
      };
      updateSize();
      // ResizeObserver로 반응형 지원
      const observer = new window.ResizeObserver(updateSize);
      observer.observe(node);
      return () => observer.disconnect();
    }
  }, []);
  return [ref, size] as const;
}
