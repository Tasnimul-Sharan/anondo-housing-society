import { useEffect } from "react";
import { useRouter } from "next/router";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export const useLenis = () => {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      anchors: true,
      autoRaf: true,
    });

    const handleRouteChangeStart = () => {
      lenis.stop();
    };

    const handleRouteChangeComplete = () => {
      lenis.start();
      lenis.scrollTo(0, { immediate: true });
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
      lenis.destroy();
    };
  }, [router.events]);
};
