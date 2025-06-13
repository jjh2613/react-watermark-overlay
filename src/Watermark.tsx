// src/Watermark.tsx

import React from "react";

export interface WatermarkProps {
  text?: string;
  opacity?: number;
  fontSize?: string;
  zIndex?: number;
}

export const Watermark: React.FC<WatermarkProps> = ({
  text = "TEST",
  opacity = 0.05,
  fontSize = "5rem",
  zIndex = 9999,
}) => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex,
        pointerEvents: "none",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "100%",
          transform: "rotate(-45deg)",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            fontSize,
            opacity,
            color: "#000",
          }}
        >
          {`${text} `.repeat(100)}
        </div>
      </div>
    </div>
  );
};

export default Watermark;
