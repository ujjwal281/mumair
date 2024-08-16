import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Testimonals from "./pages/Testimonals";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

export default function DasBoard() {
  return (
    <main className=" lg:items-center justify-center lg:flex flex-col w-full ">
      <div className=" flex items gap-14 flex-col md:container  lg:px-36 px-4">
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Testimonals/>
        <Contact/>
      </div>
      <div className="md:w-screen">
        <Footer/>
      </div>
    </main>
  ); 
}
