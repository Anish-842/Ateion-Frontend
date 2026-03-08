import { useEffect, useState } from "react";
import Homepage from "../imports/Homepage";

export default function App() {
  const [scale, setScale] = useState(1);
  const baseWidth = 1280; // Design base width
  const baseHeight = 5552; // Design base height from CSS

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Scale to fit screen width exactly (upscale or downscale)
      setScale(width / baseWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#f7f3eb] w-full min-h-screen overflow-x-hidden">
      <div 
        style={{
          width: '100vw',
          height: `${baseHeight * scale}px`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            width: `${baseWidth}px`,
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <Homepage />
        </div>
      </div>
    </div>
  );
}
