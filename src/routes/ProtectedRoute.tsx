import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import { JSX } from "react";

type Props = {
    children: JSX.Element
}

export default function ProtectedRoute({children}: Props) {
    const {user, loading} = useAuth()

    if (loading) {
        return (
            <div className="min-h-screen">
                <p className="text-gray-500 text-xl">Carregando...</p>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/login" replace />;
      }
    
      return children;
}