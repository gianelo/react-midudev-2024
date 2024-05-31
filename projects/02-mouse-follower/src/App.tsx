import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // console.log("Efecto", { enabled });
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      console.log({ clientX, clientY });

      setPosition({
        x: clientX,
        y: clientY,
      });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);
  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgb(0,0,0,0.5)",
          border: "1px solid white",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          width: 40,
          height: 40,
          top: -20,
          left: -20,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}

export default App;
