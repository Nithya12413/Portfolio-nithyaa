import { useEffect } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  useEffect(() => {
    // Just add a subtle animated glow that follows the mouse
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const mousePos = { x: 0, y: 0 };
    const glowPos = { x: 0, y: 0 };

    window.addEventListener("mousemove", (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    });

    const animate = () => {
      glowPos.x += (mousePos.x - glowPos.x) * 0.15;
      glowPos.y += (mousePos.y - glowPos.y) * 0.15;
      gsap.set(glow, { x: glowPos.x, y: glowPos.y });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (glow.parentNode) {
        glow.parentNode.removeChild(glow);
      }
    };
  }, []);

  return null;
};

export default Cursor;
