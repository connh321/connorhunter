"use client";
import { useEffect, useRef } from "react";

const BubbleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasHeight = 400; // Height for the top part of the page
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = canvasHeight);

    const bubbles = Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 60 + 30,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: `hsla(${Math.random() * 360}, 70%, 80%, 0.3)`,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      bubbles.forEach((b) => {
        b.x += b.dx;
        b.y += b.dy;

        if (b.x < 0 || b.x > width) b.dx *= -1;
        if (b.y < 0 || b.y > height) b.dy *= -1;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvasHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "400px",
        zIndex: -1,
      }}
    />
  );
};

export default BubbleBackground;
