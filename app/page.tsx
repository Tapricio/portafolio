"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  /*  useEffect(() => {
    handleDarkMode();
    console.log(darkMode);
  }, []); */

  function handleDarkMode() {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.style.setProperty(
        "--color-10-percent",
        "#b30909"
      );
      document.documentElement.style.setProperty(
        "--color-30-percent",
        "#ffffff"
      );
      document.documentElement.style.setProperty(
        "--color-60-percent",
        "#000000"
      );
    } else {
      document.documentElement.style.setProperty(
        "--color-10-percent",
        "#0b2eaf"
      );
      document.documentElement.style.setProperty(
        "--color-30-percent",
        "#000000"
      );
      document.documentElement.style.setProperty(
        "--color-60-percent",
        "#ffffff"
      );
    }
  }

  return (
    <div>
      <main>
        <h1 className="text-5xl">Test</h1>
        <button
          onClick={handleDarkMode}
          className="bg-[var(--color-10-percent)]"
        >
          cambiar modo
        </button>
      </main>
      <footer></footer>
    </div>
  );
}
