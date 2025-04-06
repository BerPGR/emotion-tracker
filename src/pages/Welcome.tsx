//import { Link } from "react-router-dom";
import welcomeImage from "../assets/undraw_with-love_rs1k.svg"
import { useEffect, useState } from "react";

export default function Welcome() {
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => {
        setTimeout(() => setFadeIn(true), 100)
    }, [])
    return (
        <div className="container mx-auto min-h-screen flex flex-col justify-center p-8">
            <h2 className={`text-cyan-950 text-3xl font-bold mb-6 transition-opacity duration-300 delay-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>Seja bem-vindo ao</h2>
            <h1 className={`text-cyan-950 text-5xl font-bold mb-6 transition-opacity duration-500 delay-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>Diário de Emoções 💚</h1>

            <div className="flex flex-row items-center justify-evenly">
                <p className="text-cyan-950 text-lg pe-20">Aqui é o seu espaço seguro para se expressar.

                    No nosso Diário de Emoções, você pode registrar o que sente, quando sente e por que sente. Cada emoção cadastrada ajuda você a entender melhor o seu dia a dia, suas reações e seu bem-estar emocional.</p>

                <img className="object-contain w-60" src={welcomeImage} alt="" />
            </div>

            <div className="mt-10 flex flex-row justify-center gap-5 align-middle">
                <a className="flex justify-center p-2 w-1/4 border border-cyan-950 rounded-md">Visitar criador</a>
                <a className="flex justify-center p-2 w-1/4 bg-calm border border-cyan-950 rounded-md">Ir ao diário</a>
            </div>
        </div>
    );
}
