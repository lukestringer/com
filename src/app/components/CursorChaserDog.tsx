import * as React from "react";

interface CursorChaserDogProps {
  diameter?: number;
}

function CursorChaserDog({ diameter = 50 }: CursorChaserDogProps): React.JSX.Element {
  // Initialize at the center of the viewport if window is available.
  const initialPosition = { x: 0, y: 0 };

  const [dogPos, setDogPos] = React.useState<{ x: number; y: number }>(initialPosition);
  const [cursorPos, setCursorPos] = React.useState<{ x: number; y: number }>(initialPosition);

  // Set up a mousemove listener to track the cursor.
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate the dog's position towards the cursor.
  React.useEffect(() => {
    let animationFrameId: number;
    const speed = 5; // pixels per animation frame

    const updatePosition = () => {
      setDogPos((currentPos) => {
        const dx = cursorPos.x - currentPos.x;
        const dy = cursorPos.y - currentPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Snap to the cursor if close enough.
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
    <img
      src="/dog.jpg"
      alt="Dog"
      style={{
        position: "absolute",
        left: dogPos.x - diameter / 2,
        top: dogPos.y - diameter / 2,
        width: `${diameter}px`,
        height: `${diameter}px`,
      }}
    />
  );
}

export default CursorChaserDog;