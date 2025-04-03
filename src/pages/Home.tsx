import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-calm to-joy">
      <h1 className="text-white text-5xl font-bold mb-6">Controle de Emoções</h1>
      <Link to="/registrar" className="bg-white text-calm px-6 py-3 rounded-full text-lg font-medium shadow-lg">
        Registrar Emoção
      </Link>
    </div>
  );
}
