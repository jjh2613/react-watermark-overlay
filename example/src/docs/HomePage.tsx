import React from "react";

export function HomePage() {
  return (
    <section>
      <h1>Welcome to React Watermark Overlay</h1>
      <p style={{ fontSize: "1.2rem", marginTop: 16 }}>
        <strong>React Watermark Overlay</strong> is a lightweight React
        component designed to overlay a repeated, diagonal watermark text across
        your application. This is especially useful for marking staging, test,
        or confidential environments, ensuring that screenshots or shared
        screens are clearly identified as non-production.
      </p>
      <ul style={{ marginTop: 24, fontSize: "1.1rem" }}>
        <li>🔒 Prevent accidental leaks of sensitive or staging data</li>
        <li>
          🖥️ Visually distinguish between production and non-production
          environments
        </li>
        <li>
          ⚡ Easy to integrate, highly customizable, and zero dependencies
        </li>
      </ul>
      <p style={{ marginTop: 32, color: "#888" }}>
        Explore the examples and API documentation using the sidebar.
      </p>
    </section>
  );
}
