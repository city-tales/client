import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SmokeEffect() {
  const smokeRef = useRef(null);

  useEffect(() => {
    gsap.to(smokeRef.current, {
      opacity: 1,
      duration: 3,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={smokeRef}
      className="absolute top-0 left-0 w-full h-full bg-cover opacity-0"
      style={{ backgroundImage: "url('/smoke.png')" }} // Replace with your smoke image
    />
  );
}
