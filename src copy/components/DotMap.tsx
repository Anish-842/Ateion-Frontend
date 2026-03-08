import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const nodesData = [
  { id: 'uk', coords: [-2, 53] as [number, number] },
  { id: 'france', coords: [2, 46] as [number, number] },
  { id: 'middle-east', coords: [55, 25] as [number, number] },
  { id: 'india', coords: [78, 20] as [number, number] },
  { id: 'singapore', coords: [103.8, 1.3] as [number, number] },
  { id: 'australia', coords: [151, -33] as [number, number] },
];

export default function DotMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodePositions, setNodePositions] = useState<{id: string, x: number, y: number}[]>([]);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isMounted = true;
    let cachedWorld: any = null;

    const renderMap = async () => {
      const rect = container.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);
      
      if (width === 0 || height === 0) return;

      // Set canvas size for high DPI
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);

      try {
        if (!cachedWorld) {
          const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json');
          cachedWorld = await response.json();
        }
        const world = cachedWorld;
        if (!isMounted) return;
        
        const countries = topojson.feature(world, world.objects.countries as any) as any;
        countries.features = countries.features.filter((d: any) => d.id !== '010' && d.properties.name !== 'Antarctica');

        // Use a projection that fits the container well
        const projection = d3.geoEquirectangular()
          .fitSize([width, height], countries);

        // Calculate node positions
        const positions = nodesData.map(node => {
          const [x, y] = projection(node.coords) || [0, 0];
          return { ...node, x, y };
        });
        setNodePositions(positions);

        // Create offscreen canvas for pixel reading
        const offCanvas = document.createElement('canvas');
        offCanvas.width = width;
        offCanvas.height = height;
        const offCtx = offCanvas.getContext('2d');
        if (!offCtx) return;

        const path = d3.geoPath().projection(projection).context(offCtx);
        
        offCtx.fillStyle = '#fff';
        offCtx.beginPath();
        path(countries);
        offCtx.fill();

        const imageData = offCtx.getImageData(0, 0, width, height);
        const data = imageData.data;
        const imgWidth = imageData.width;

        // Draw map
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'; // Soft white dots

        const step = 4; // Dot spacing (denser for 8k look)
        const dotRadius = 0.8; // Dot size (smaller for 8k look)

        for (let y = 0; y < height; y += step) {
          for (let x = 0; x < width; x += step) {
            const index = (y * imgWidth + x) * 4;
            // Check alpha channel to see if it's land
            if (data[index + 3] > 128) {
              ctx.beginPath();
              ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      } catch (error) {
        console.error("Error loading map data:", error);
      }
    };

    renderMap();

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      // Debounce resize
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(renderMap);
    });

    resizeObserver.observe(container);

    return () => {
      isMounted = false;
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.download = 'antigravity-map.png';
    
    // Get the data URL from the canvas
    // We use image/png for highest quality
    link.href = canvas.toDataURL('image/png');
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={containerRef} className="relative w-full h-full bg-[#050505] overflow-hidden group">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Download Button */}
      <button 
        onClick={handleDownload}
        className="absolute top-4 right-4 z-50 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-mono rounded-md border border-white/20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" x2="12" y1="15" y2="3"/>
        </svg>
        Download Map
      </button>

      {nodePositions.map(node => (
        <div 
          key={node.id}
          className="absolute pointer-events-none"
          style={{ 
            left: `${node.x}px`, 
            top: `${node.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Node core */}
          <div className="relative w-2 h-2 bg-white rounded-full shadow-[0_0_15px_5px_rgba(96,165,250,0.8)] z-10" />
          
          {/* Ripples */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-8 h-8 border-[1.5px] border-blue-400/60 rounded-full animate-ripple" />
            <div className="absolute w-8 h-8 border-[1.5px] border-blue-400/60 rounded-full animate-ripple animate-ripple-delay-1" />
            <div className="absolute w-8 h-8 border-[1.5px] border-blue-400/60 rounded-full animate-ripple animate-ripple-delay-2" />
          </div>
        </div>
      ))}
    </div>
  );
}
