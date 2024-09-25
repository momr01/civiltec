"use client";
import React from "react";
import { CustomFlowbiteTheme, Footer as FooterFBR } from "flowbite-react";
import Image from "next/image";
import { customThemeFooter } from "./customTheme";
import { usePathname } from "next/navigation";
import styles from "./footer.module.css";
import { logoBlack, logoMOMR, logoWhite } from "@/assets/img/logo/logo";

const Footer = () => {
  // const pathname = usePathname();
  //const isProjectsPage = pathname.includes("proyectos");

  return (
    <FooterFBR container theme={customThemeFooter}>
      <div
        className="w-full text-center
          mb-24 lg:mb-10"
      >
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          {/* <FooterFBR.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          /> */}
          <div className="flex w-full justify-center md:justify-start">
            <Image
              src={logoBlack}
              alt="logo"
              className="w-[100px] md:w-[150px]"
            />
          </div>

          {/* <FooterFBR.LinkGroup>
            <FooterFBR.Link href="#">About</FooterFBR.Link>
            <FooterFBR.Link href="#">Privacy Policy</FooterFBR.Link>
            <FooterFBR.Link href="#">Licensing</FooterFBR.Link>
            <FooterFBR.Link href="#">Contact</FooterFBR.Link>
          </FooterFBR.LinkGroup> */}
        </div>
        <FooterFBR.Divider className="border-white" />

        <FooterFBR.Copyright
          href="#"
          by="- Todos los derechos reservados."
          year={2024}
          className="text-black"
        />
        {/* <FooterFBR.Title title="Desarrollado por MOMR™" className="mt-2" /> */}
        <div className="flex items-end justify-center mt-2">
          <span className="text-sm font-semibold uppercase text-gray-500 dark:text-white mr-2">
            Desarrollado por
          </span>
          <div className="flex">
            <Image src={logoMOMR} alt="logoMOMR" width={50} />
            <span className="text-sm font-semibold uppercase text-gray-500 dark:text-white">
              ™
            </span>
          </div>
        </div>
      </div>
    </FooterFBR>
  );
};

export default Footer;
