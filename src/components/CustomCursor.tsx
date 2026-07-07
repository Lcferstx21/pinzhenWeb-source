import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Style class variables for easier extension and maintenance
  const baseClass =
    "fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-black bg-white w-[20px] h-[20px] mix-blend-normal transform";
  const hoverClass = "bg-black mix-blend-difference border-none transform";
  const clickClass = "border-black mix-blend-normal scale-150 transform";

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const downHandler = () => setIsClicked(true);
    const upHandler = () => setIsClicked(false);
    const hoverHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(
          "a, button, input, textarea, select, label, Link, .cursor-hover-target"
        )
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mousedown", downHandler);
    document.addEventListener("mouseup", upHandler);
    document.addEventListener("mouseover", hoverHandler);

    return () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mousedown", downHandler);
      document.removeEventListener("mouseup", upHandler);
      document.removeEventListener("mouseover", hoverHandler);
    };
  }, []);

  const appliedClass = `${baseClass} ${
    isClicked ? clickClass : isHovering ? hoverClass : "scale-100 transform"
  }`;

  return (
    <div
      className={appliedClass}
      style={{
        transform: `translate(${position.x}px, ${
          position.y
        }px) translate(-50%, -50%) scale(${isClicked ? 1.1 : 1})`,
        transition: isClicked ? "  " : undefined,
      }}
    />
  );
};

export default CustomCursor;
