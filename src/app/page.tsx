import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <Hero />
    </div>
  );
}
