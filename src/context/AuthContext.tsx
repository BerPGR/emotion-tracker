import React, {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import api from '../api/axios'

type User = {
    id: number,
    name: string,
    email: string
}

type AuthContextType = {
    user: User | null,
    loading: boolean,
    login: (email: string, password: string) => Promise<void>,
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem("token")
            if (token) {
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                const {data} = await api.post("/user")
                setUser(data)
            }
        } catch(err) {
            console.log(err);
            
            setUser(null)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    const login = async (email: string, password: string) => {
        const { data } = await api.post("/login", {
            email,
            password
        })

        localStorage.setItem("token", data.token)
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`
        setUser(data.user)
    }

    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error("useAuth precisa estar dentro de AuthProvider")
    return ctx;
}