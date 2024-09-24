"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/data/navItems";
import { logoWhite } from "@/assets/img/logo/logo";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isProjectsPage = pathname.includes("proyectos");

  useEffect(() => {
    if (window.scrollY > 0) {
      setScrolled(true);
    }

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRedirect = (path: string) => {
    // Inicia la redirección
    router.push(`/${path}`);
  };

  return (
    <header
      className={`${styles.header} ${
        !isProjectsPage
          ? scrolled
            ? styles.headerScrolled
            : styles.headerTransparent
          : styles.headerProjects
      } containerBase`}
    >
      <Link className={styles.logoLink} href={"/"}>
         <Image
          src={logoWhite}
          alt="logo"
          width={200}
        /> 
      
      </Link>
      <nav
        className={`${styles.nav} ${
          !isProjectsPage
            ? scrolled
              ? styles.navWhite
              : styles.navWhite
            : styles.navBlack
        } `}
      >
        <div className={styles.itemsContainer}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleRedirect(item.href)}
              className={styles.navItemBtn}
            >
              {item.title}
            </button>
          ))}
        </div>
      </nav>
      <div className={styles.burgerNav}>
        {/* <BurgerNav
          navItems={navItems}
          isProjectsPage={isProjectsPage}
        /> */}
      </div>
    </header>
  );
};

export default Header;
