// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
// export const useLenis = () => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       smooth: true,
//       duration: 1.2,
//       easing: (t) => 1 - Math.pow(1 - t, 3),
//       direction: "vertical",
//       gestureDirection: "vertical",
//       smoothTouch: true,
//       touchMultiplier: 1.2,
//     });
//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);
// };

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);
};
