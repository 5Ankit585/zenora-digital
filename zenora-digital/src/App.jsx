import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="min-h-screen bg-[#04040f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
    </div>
  );
}

export default App;