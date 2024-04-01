import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Alalytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Alalytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
