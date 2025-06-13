import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { HomePage } from "./docs/HomePage";
import { ExampleOverlayPage } from "./docs/ExampleOverlayPage";
import { ExampleBoxPage } from "./docs/ExampleBoxPage";
import { ExampleMixedPage } from "./docs/ExampleMixedPage";
import { ApiPage } from "./docs/ApiPage";

export default function App() {
  return (
    <div className="docs-root">
      <aside className="docs-sidebar">
        <div className="docs-logo">React Watermark Overlay</div>
        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
          <div className="docs-section">Examples</div>
          <NavLink
            to="/examples/overlay"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Overlay Example
          </NavLink>
          <NavLink
            to="/examples/box"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Box Example
          </NavLink>
          <NavLink
            to="/examples/mixed"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Mixed Example
          </NavLink>
          <div className="docs-section">API</div>
          <NavLink
            to="/api"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Component API
          </NavLink>
        </nav>
      </aside>
      <main className="docs-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/examples/overlay" element={<ExampleOverlayPage />} />
          <Route path="/examples/box" element={<ExampleBoxPage />} />
          <Route path="/examples/mixed" element={<ExampleMixedPage />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>
      </main>
    </div>
  );
}
