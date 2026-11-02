import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for desktop mice
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Trailing animation loop
    let animId: number;
    let currentX = -100;
    let currentY = -100;

    const loop = () => {
      animId = requestAnimationFrame(loop);
      currentX += (position.x - currentX) * 0.2;
      currentY += (position.y - currentY) * 0.2;
      setTrailingPos({ x: currentX, y: currentY });
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#722F37] pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      />

      {/* Trailing Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#722F37]/50 pointer-events-none z-50 transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block ${
          isPointer
            ? 'w-10 h-10 bg-[#722F37]/15 border-[#722F37] scale-125'
            : 'w-7 h-7'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      />
    </>
  );
}
