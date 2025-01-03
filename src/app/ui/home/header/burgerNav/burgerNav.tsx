"use client";
import { INavItem } from "@/interfaces/iNavItems";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./burgerNav.module.css";
import { logoFigure } from "@/assets/img/logo/logo";

function BurgerNav({
  navItems,
  scrolled,
}: {
  navItems: INavItem[];
  scrolled: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isNotHomePage =
    pathname.includes("proyectos") ||
    pathname.includes("obras") ||
    pathname.includes("blog") ||
    pathname.includes("nosotros");

  //||
  // pathname.includes("proyectos");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRedirect = (path: string) => {
    // Inicia la redirección
    router.push(`/${path}`);

    // Cambia el estado justo después de la redirección
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleMenu} className={styles.burgerBtn}>
        <div
          className={`${styles.burgerBtnLineTransform}
         
          ${
            isNotHomePage
              ? styles.burgerBtnLineBlack
              : scrolled
              ? styles.burgerBtnLineBlack
              : styles.burgerBtnLineWhite
          } ${isOpen ? styles.burgerLine1Open : ""}`}
        ></div>
        <div
          className={`${styles.burgerBtnLineMb} ${
            isNotHomePage
              ? styles.burgerBtnLineBlack
              : scrolled
              ? styles.burgerBtnLineBlack
              : styles.burgerBtnLineWhite
          } ${isOpen ? styles.burgerLine2Open : ""}`}
        ></div>
        <div
          className={`${styles.burgerBtnLines} ${
            isNotHomePage
              ? styles.burgerBtnLineBlack
              : scrolled
              ? styles.burgerBtnLineBlack
              : styles.burgerBtnLineWhite
          } ${isOpen ? styles.burgerLine3Open : ""}`}
        ></div>
      </button>

      {/* Overlay */}
      <div
        className={`${styles.overlayContainer} ${
          isOpen ? styles.overlayOpen : styles.overlayClose
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Menu */}
      <div
        className={`${styles.menuContainer} ${
          isOpen ? styles.menuOpen : styles.menuClose
        }`}
      >
        <div className={styles.menuLogoContainer}>
          <Image src={logoFigure} alt="logo" />
        </div>

        <ul className={styles.menuNav}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.menuNavItem}>
              <button onClick={() => handleRedirect(item.href)}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BurgerNav;
