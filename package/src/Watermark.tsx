import React, { useMemo } from "react";
import { useSize } from "./useSize";

export interface WatermarkProps {
  text?: string;
  opacity?: number;
  fontSize?: string;
  type?: "box" | "overlay";
  rotate?: number;
  containerDivAttributes?: React.HTMLAttributes<HTMLDivElement>;
  watermarkCellSize?: number;
}

export const Watermark: React.FC<WatermarkProps> = ({
  text = "TEST",
  opacity = 0.2,
  fontSize = "5rem",
  type = "box",
  rotate = -45,
  containerDivAttributes,
  watermarkCellSize = 160,
}) => {
  const [containerRef, size] = useSize<HTMLDivElement>();

  const diagonal = useMemo(
    () =>
      Math.ceil(Math.sqrt(Math.pow(size.width, 2) + Math.pow(size.height, 2))),
    [size.width, size.height]
  );

  const overlayStyle = useMemo(() => {
    if (type === "overlay") {
      return {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      } as React.CSSProperties;
    } else return undefined;
  }, [type]);

  const rows = Math.ceil(diagonal / watermarkCellSize);
  const cols = Math.ceil(diagonal / (watermarkCellSize * 2));

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        ...baseStyle,
        ...overlayStyle,
        ...containerDivAttributes?.style,
      }}
      {...containerDivAttributes}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: diagonal,
            height: diagonal,
            display: "grid",
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            pointerEvents: "none",
            userSelect: "none",
            opacity,
          }}
        >
          {Array.from({ length: rows }).map((_, rowIdx) =>
            Array.from({ length: cols }).map((_, colIdx) => (
              <span
                key={`${rowIdx}-${colIdx}`}
                style={{
                  fontSize,
                  color: "#000",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  opacity,
                  userSelect: "none",
                  transform: rowIdx % 2 === 1 ? "translateX(50%)" : undefined,
                  gridRow: rowIdx + 1,
                  gridColumn: colIdx + 1,
                }}
              >
                {text}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const baseStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  userSelect: "none",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default Watermark;
