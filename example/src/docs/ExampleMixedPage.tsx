import React from "react";
import { Watermark } from "react-watermark-overlay";

export function ExampleMixedPage() {
  return (
    <section>
      <h1>Mixed Watermark Example</h1>
      <p style={{ marginTop: 16 }}>
        You can combine both <code>type="overlay"</code> and{" "}
        <code>type="box"</code> watermarks in the same application. This is
        useful for marking the whole app as staging, while also marking specific
        areas as confidential or for review.
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
          opacity={0.15}
          fontSize="2rem"
          type="overlay"
          rotate={-45}
          cellSize={160}
        />
        <div
          style={{
            width: 320,
            height: 240,
            border: "1px solid #aaa",
            borderRadius: 6,
            margin: 32,
            position: "relative",
            background: "#fff",
          }}
        >
          <Watermark
            text="REVIEW"
            opacity={0.5}
            fontSize="1rem"
            type="box"
            rotate={-30}
            cellSize={80}
          />
          <div style={{ position: "relative", zIndex: 1, padding: 16 }}>
            <h2>Review Area</h2>
            <p>This section is marked for review.</p>
          </div>
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
  opacity={0.15}
  fontSize="2rem"
  type="overlay"
  rotate={-45}
  cellSize={160}
/>
<div style={{ width: 320, height: 240, position: 'relative' }}>
  <Watermark
    text="REVIEW"
    opacity={0.5}
    fontSize="1rem"
    type="box"
    rotate={-30}
    cellSize={80}
  />
  <div>...</div>
</div>`}
      </pre>
    </section>
  );
}
