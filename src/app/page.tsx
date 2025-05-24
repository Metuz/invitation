import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Plans from "./components/Plans";
import Testimonies from "./components/Testimonies";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f1f2e9] text-[#1e1e1e]">
      <Header />
      <Hero />
      <Products />
      <Gallery />
      <Plans />
      <Testimonies />
      <Footer />
    </main>
  );
}
