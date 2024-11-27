import About from "./ui/home/about/about";
import Blog from "./ui/home/blog/blog";
import BtnInstagram from "./ui/home/btnInstagram/btnInstagram";
import BtnWhatsapp from "./ui/home/btnWhatsapp/btnWhatsapp";
import Contact from "./ui/home/contact/contact";
import Cover from "./ui/home/cover/cover";
import Projects from "./ui/home/projects/projects";
import Us from "./ui/home/us/us";
import Works from "./ui/home/works/works";

export default function Home() {
  return (
    <>
      <BtnWhatsapp />
      <BtnInstagram />
      <Cover />
      <About />
      <Projects />
      <Works />
      <Blog />
      <Us />
      <Contact />
    </>
  );
}
