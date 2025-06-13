import { Watermark } from "react-watermark-overlay";
import "./App.css";

function App() {
  return (
    <>
      <Watermark
        text="REACT WATERMARK"
        opacity={0.4}
        fontSize="1rem"
        type="overlay"
        rotate={-45}
        watermarkGap={160}
      />
      <div style={{ padding: "4rem" }}>
        <h1>Example App</h1>
        <p>React Watermark Overlay Components Demo</p>
        <div style={{ width: 320, height: 480, border: "1px solid red" }}>
          <Watermark
            text="HELLO WORLD"
            opacity={0.8}
            fontSize="1rem"
            rotate={-30}
            watermarkGap={80}
          />
        </div>
      </div>
    </>
  );
}
export default App;
