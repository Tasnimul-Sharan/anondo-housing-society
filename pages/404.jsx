import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  const underlineRef = useRef(null);
  const linkRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );

    const underline = underlineRef.current;
    const link = linkRef.current;
    if (!underline || !link) return;

    const handleEnter = () =>
      gsap.to(underline, { width: "100%", duration: 0.3, ease: "power2.out" });

    const handleLeave = () =>
      gsap.to(underline, { width: "0%", duration: 0.3, ease: "power2.out" });

    link.addEventListener("mouseenter", handleEnter);
    link.addEventListener("mouseleave", handleLeave);

    return () => {
      link.removeEventListener("mouseenter", handleEnter);
      link.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      <Head>
        <title>404 – Page Not Found | Anondo Housing Society</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="The page you are looking for could not be found. Return to the Anondo Housing Society homepage."
        />
      </Head>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
        <div ref={containerRef} className="max-w-2xl text-center text-gray-900">
          {/* Big 404 */}
          <div className="text-[120px] md:text-[160px] font-bold leading-none text-primary mb-4 select-none">
            404
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Page not found
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-10">
            The page you are looking for doesn’t exist, has been removed, or is
            temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary action */}
            {/* <Link href="/" legacyBehavior>
              <a className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                Go to homepage
              </a>
            </Link> */}

            {/* Secondary link with underline animation */}
            <div className="relative inline-block">
              <Link href="/" legacyBehavior>
                <a
                  ref={linkRef}
                  className="text-base font-medium text-gray-700 hover:text-primary relative z-10 transition-all transform duration-500"
                >
                  ← Back to home
                </a>
              </Link>
              <span
                ref={underlineRef}
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
