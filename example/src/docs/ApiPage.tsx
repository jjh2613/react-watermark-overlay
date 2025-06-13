import React from "react";

export function ApiPage() {
  return (
    <section>
      <h1>Watermark Component API</h1>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: 24 }}
      >
        <thead>
          <tr style={{ background: "#f6f8fa" }}>
            <th
              style={{
                textAlign: "left",
                padding: 8,
                borderBottom: "1px solid #eee",
              }}
            >
              Prop
            </th>
            <th
              style={{
                textAlign: "left",
                padding: 8,
                borderBottom: "1px solid #eee",
              }}
            >
              Type
            </th>
            <th
              style={{
                textAlign: "left",
                padding: 8,
                borderBottom: "1px solid #eee",
              }}
            >
              Default
            </th>
            <th
              style={{
                textAlign: "left",
                padding: 8,
                borderBottom: "1px solid #eee",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: 8 }}>text</td>
            <td style={{ padding: 8 }}>string</td>
            <td style={{ padding: 8 }}>
              <code>"TEST"</code>
            </td>
            <td style={{ padding: 8 }}>The watermark text to display.</td>
          </tr>
          <tr>
            <td style={{ padding: 8 }}>opacity</td>
            <td style={{ padding: 8 }}>number</td>
            <td style={{ padding: 8 }}>
              <code>0.2</code>
            </td>
            <td style={{ padding: 8 }}>Opacity of the watermark text.</td>
          </tr>
          <tr>
            <td style={{ padding: 8 }}>fontSize</td>
            <td style={{ padding: 8 }}>string</td>
            <td style={{ padding: 8 }}>
              <code>"5rem"</code>
            </td>
            <td style={{ padding: 8 }}>Font size of the watermark text.</td>
          </tr>
          <tr>
            <td style={{ padding: 8 }}>type</td>
            <td style={{ padding: 8 }}>
              <code>"box" | "overlay"</code>
            </td>
            <td style={{ padding: 8 }}>
              <code>"box"</code>
            </td>
            <td style={{ padding: 8 }}>
              Whether to cover the whole viewport (<code>overlay</code>) or just
              the container (<code>box</code>).
            </td>
          </tr>
          <tr>
            <td style={{ padding: 8 }}>rotate</td>
            <td style={{ padding: 8 }}>number</td>
            <td style={{ padding: 8 }}>
              <code>-45</code>
            </td>
            <td style={{ padding: 8 }}>
              Rotation angle (degrees) for the watermark pattern.
            </td>
          </tr>
          <tr>
            <td style={{ padding: 8 }}>cellSize</td>
            <td style={{ padding: 8 }}>number</td>
            <td style={{ padding: 8 }}>
              <code>320</code>
            </td>
            <td style={{ padding: 8 }}>
              The size of each watermark cell (distance between repeated texts).
            </td>
          </tr>
          <tr>
            <td style={{ padding: 8 }}>containerDivAttributes</td>
            <td style={{ padding: 8 }}>
              HTMLAttributes&#60;HTMLDivElement&#62;
            </td>
            <td style={{ padding: 8 }}>-</td>
            <td style={{ padding: 8 }}>
              Props to spread onto the container div (e.g., <code>style</code>,{" "}
              <code>className</code>).
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
