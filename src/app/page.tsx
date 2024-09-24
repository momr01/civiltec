import About from "./ui/home/about/about";
import Blog from "./ui/home/blog/blog";
import Contact from "./ui/home/contact/contact";
import Cover from "./ui/home/cover/cover";
import Footer from "./ui/home/footer/footer";
import Header from "./ui/home/header/header";
import Projects from "./ui/home/projects/projects";
import Us from "./ui/home/us/us";
import Works from "./ui/home/works/works";


export default function Home() {
  return (
    <>
    <Header />
    <Cover />
    <About />
    <Projects />
    <Works />
    <Blog />
    <Us />
    <Contact />
    <Footer />
    </>
  );
}
