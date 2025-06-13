import React from "react";
import { Watermark } from "react-watermark-overlay";

export function ExampleBoxPage() {
  return (
    <section>
      <h1>Box Watermark Example</h1>
      <p style={{ marginTop: 16 }}>
        The <code>type="box"</code> mode applies the watermark only to a
        specific container. This is useful when you want to mark a particular
        section, such as a preview or a document area.
      </p>
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: 8,
          margin: "32px 0",
          width: 320,
          height: 240,
          position: "relative",
        }}
      >
        <Watermark
          text="CONFIDENTIAL"
          opacity={0.3}
          fontSize="1.2rem"
          type="box"
          rotate={-30}
          cellSize={80}
        />
        <div style={{ position: "relative", zIndex: 1, padding: 16 }}>
          <h2>Document Preview</h2>
          <p>This area is marked as confidential.</p>
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
        {`<div style={{ width: 320, height: 240, position: 'relative' }}>
  <Watermark
    text="CONFIDENTIAL"
    opacity={0.3}
    fontSize="1.2rem"
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
