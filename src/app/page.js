"use client";
import styles from "./page.module.scss";
import ZoomParallax from "../components/ZoomParallax/index";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import TypewriterTitle from "@/components/typewriter";

import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <h1 className={styles.hi}>
        <TypewriterTitle
          firstLine="Animation using Framer Motion and GSAP"
          secondLine="with a touch of Lenis for the smoothness"
        />
      </h1>

      <main className={styles.main}>
        <ZoomParallax />
      </main>

      <h1 className={styles.hj}>
        <TypewriterTitle firstLine="Follow for more" secondLine="By Dev" />
      </h1>
    </>
  );
}
