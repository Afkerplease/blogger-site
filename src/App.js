import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LaptopSection from "./Components/LaptopSection";
import PhoneSection from "./Components/PhoneSection";
import Second from "./Components/Second";

function App() {
  return (
    <main className=" w-[100%]  ">
      <Header />
      <Second />
      <PhoneSection />
      <LaptopSection />
      <Footer />
    </main>
  );
}

export default App;
