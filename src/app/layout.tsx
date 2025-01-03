import "./ui/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./ui/home/header/header";
import Footer from "./ui/home/footer/footer";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CIVILTEC",
  description: "CIVILTEC - Sitio Web Oficial",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/img/logo.png",
        href: "/img/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/img/logo.png",
        href: "/img/logo.png",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header />
       
        {children}
        <Footer />
      </body>
    </html>
  );
}
