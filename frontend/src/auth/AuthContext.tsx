import { createContext, useContext, useState } from "react";
import api from "../api/axios";
import type { AuthContextType } from "./auth.types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token")
    );

    const login = async (email: string, password: string) => {
        try {
            const res = await api.post("/auth/login", { email, password });

            setToken(res.data.accessToken);
            localStorage.setItem("token", res.data.accessToken);
            toast.success("Login successful");
            navigate("/");
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Login failed");
            throw err;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};