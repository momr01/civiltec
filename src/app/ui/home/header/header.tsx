"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/data/navItems";
import { logoBlack, logoWhite } from "@/assets/img/logo/logo";
import BurgerNav from "./burgerNav/burgerNav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isNotHomePage =
    pathname.includes("blog") ||
    pathname.includes("nosotros") ||
    pathname.includes("obras");
  //||
  // pathname.includes("proyectos");
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
      className={`${styles.header} 
        ${!isNotHomePage ? styles.headerTransparent : styles.headerScrolled}

        ${
          scrolled ? styles.headerScrolled : styles.headerTransparent
        } containerBase`}
    >
      <Link className={styles.logoLink} href={"/"}>
        <Image
          src={
            scrolled
              ? logoBlack
              : isProjectsPage
              ? logoBlack
              : !isNotHomePage
              ? logoWhite
              : logoBlack
          }
          alt="logo"
          width={200}
        />
      </Link>
      <nav
        className={`${styles.nav}
        ${
          isProjectsPage
            ? styles.navBlack
            : !isNotHomePage
            ? styles.navWhite
            : styles.navBlack
        }
        ${scrolled ? styles.navBlack : styles.navWhite} `}
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
        <BurgerNav navItems={navItems} scrolled={scrolled} />
      </div>
    </header>
  );
};

export default Header;
