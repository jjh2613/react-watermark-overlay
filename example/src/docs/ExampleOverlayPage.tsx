import React from "react";
import { Watermark } from "react-watermark-overlay";

export function ExampleOverlayPage() {
  return (
    <section>
      <h1>Overlay Watermark Example</h1>
      <p style={{ marginTop: 16 }}>
        The <code>type="overlay"</code> mode covers the entire viewport with a
        repeated watermark. This is ideal for staging or test environments where
        you want to make it clear that the application is not in production.
      </p>
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: 8,
          margin: "32px 0",
          position: "relative",
          minHeight: 240,
        }}
      >
        <Watermark
          text="STAGING"
          opacity={0.2}
          fontSize="2rem"
          type="overlay"
          rotate={-45}
          cellSize={160}
        />
        <div style={{ position: "relative", zIndex: 1, padding: 32 }}>
          <h2>Staging Environment</h2>
          <p>This is a sample application page with a watermark overlay.</p>
        </div>
      </div>
      <pre
        style={{
          background: "#f6f8fa",
          padding: 16,
          borderRadius: 8,
          overflowX: "auto",
        }}
      >
        {`<Watermark
  text="STAGING"
  opacity={0.2}
  fontSize="2rem"
  type="overlay"
  rotate={-45}
  cellSize={160}
/>`}
      </pre>
    </section>
  );
}
