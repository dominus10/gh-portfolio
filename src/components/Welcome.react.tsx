import { useEffect, useRef } from "react";

export default function WelcomeReact({ color = "text-slate-700" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = document.body.clientWidth - 100;
    canvas.height = window.innerHeight;

    // Get computed Tailwind color
    const tempDiv = document.createElement("div");
    tempDiv.className = color;
    document.body.appendChild(tempDiv);
    const computedColor = getComputedStyle(tempDiv).color;
    document.body.removeChild(tempDiv);

    // Matrix characters
    const characters =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(144, 161, 185, 0.05)"; // Background fade effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = computedColor; // Apply Tailwind color
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, x) => {
        const char = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(char, x * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[x] = 0;
        }
        drops[x]++;
      });
    };

    const interval = setInterval(drawMatrix, 50);

    const handleResize = () => {
      canvas.width = document.body.clientWidth - 100;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [color]);

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="bg-slate-400 opacity-80" />
      <div className="absolute top-6 left-6 right-6 bottom-6 bg-slate-400 opacity-95">
        aa
      </div>
    </div>
  );
}
