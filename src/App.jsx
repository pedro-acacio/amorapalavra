import Nav from "./components/Nav";
import ScrollLine from "./components/ScrollLine";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Produtos from "./components/Produtos";
import GuiasBiblicos from "./components/GuiasBiblicos";
import Galeria from "./components/Galeria";
import ComoFunciona from "./components/ComoFunciona";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <ScrollLine />
      <Nav />
      <Hero />
      <Sobre />
      <Produtos />
      <GuiasBiblicos />
      <Galeria />
      <ComoFunciona />
      <Contato />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
