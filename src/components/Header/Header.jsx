"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isEnglish = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Focker.ir</h1>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.menuIcon}></span>
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <a href="#usage">{isEnglish ? "Usage" : "نحوه استفاده"}</a>
        <a href="#benefits">{isEnglish ? "Benefits" : "مزایا"}</a>
        <a href="#faq">{isEnglish ? "FAQ" : "سوالات متداول"}</a>
        <div className={styles.language}>
          <Link href="/" className={isEnglish ? styles.active : ""}>EN</Link>
          <span>|</span>
          <Link href="/fa" className={!isEnglish ? styles.active : ""}>فا</Link>
        </div>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
