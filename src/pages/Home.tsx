import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-screen flex flex-col p-8 bg-gradient-to-br from-calm to-joy content-center">
        <h1 className="text-white text-5xl font-bold mb-6">Controle de Emoções</h1>
        <Link to="/registrar" className="bg-white text-calm px-6 py-3 rounded-full text-lg font-medium shadow-lg">
          Registrar Emoção
        </Link>
      </div>
    </>
  );
}
