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
      <BtnInstagram />
      {/* <div
        className="fixed z-50 bottom-0 right-0 w-1/2 flex justify-end border-l
lg:z-[80] lg:bottom-16 lg:right-10 lg:w-auto lg:border-none"
      >
        <Link
          legacyBehavior
          href={`https://wa.me/5556666666?text=${encodeURIComponent(
            "ffffffffffff"
          )}`}
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 px-5 py-2 flex flex-col w-full h-20 justify-center
lg:bg-green-400 lg:rounded-2xl lg:flex-row lg:gap-3 lg:w-auto lg:h-auto lg:hover:bg-green-600 lg:transition lg:duration-300"
          >
            {" "}
            <div
              className="text-white hidden
lg:block"
            >
              Hablame
            </div>
            <div className="w-full flex justify-center">
              <FaWhatsapp
                className="text-white text-3xl
lg:text-2xl"
              />
            </div>
            <span
              className="block text-white text-center w-full
lg:hidden"
            >
              WhatsApp
            </span>
          </a>
        </Link>
      </div> */}
      <BtnWhatsapp />

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
