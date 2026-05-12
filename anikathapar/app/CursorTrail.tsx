"use client";

import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 60) return;
      lastTime = now;

      const heart = document.createElement("span");
      heart.textContent = "♡";
      const size = 0.8 + Math.random() * 0.6;
      heart.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        font-size: ${size}rem;
        color: black;
        animation: heartTrail 0.8s ease-out forwards;
        z-index: 9999;
        transform: translate(-50%, -50%);
        user-select: none;
      `;
      document.body.appendChild(heart);
      heart.addEventListener("animationend", () => heart.remove());
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
