import * as React from "react";

interface CursorChaserDogProps {
  diameter?: number;
}

function CursorChaserDog({diameter = 10} : CursorChaserDogProps): React.JSX.Element {
  // When window is available, initialize position just outside screen.
  const initialPosition = typeof window !== "undefined" 
    ? { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    : { x: 0, y: 0 };

  const [dotPos, setDotPos] = React.useState<{ x: number; y: number }>(initialPosition);
  const [cursorPos, setCursorPos] = React.useState<{ x: number; y: number }>(initialPosition);

  // Set up the mousemove listener only when the window is defined.
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate the dot moving towards the cursor using requestAnimationFrame.
  React.useEffect(() => {
    let animationFrameId: number;
    const speed = 5; // pixels per frame

    const updatePosition = () => {
      setDotPos((currentPos) => {
        const dx = cursorPos.x - currentPos.x;
        const dy = cursorPos.y - currentPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the dot is close enough to the cursor, snap to its position.
        if (distance < speed || distance === 0) {
          return { x: cursorPos.x, y: cursorPos.y };
        }

        return {
          x: currentPos.x + (dx / distance) * speed,
          y: currentPos.y + (dy / distance) * speed,
        };
      });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPos]);

  return (
    <div
      style={{
        position: "absolute",
        left: dotPos.x - 5, // shift to center the 10px dot
        top: dotPos.y - 5,
        width: `${diameter}px`,
        height: `${diameter}px`,
        borderRadius: "50%",
        backgroundColor: "red",
      }}
    />
  );
}

export default CursorChaserDog;