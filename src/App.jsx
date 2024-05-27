import "./App.css";
import HeroBanner from "./components/HeroBanner";
import TopAcademies from "./components/TopAcademies";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <TopAcademies />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
