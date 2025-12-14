import { createContext, useContext, useState } from "react";
import api from "../api/axios";
import type { AuthContextType } from "./auth.types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token")
    );

    const [role, setRole] = useState<"ADMIN" | "USER" | null>(() => {
        const stored = localStorage.getItem("token");
        if (!stored) return null;
        const decoded: any = jwtDecode(stored);
        return decoded.role;
    });

    const login = async (email: string, password: string) => {
        try {
            const res = await api.post("/auth/login", { email, password });

            const accessToken = res.data.accessToken;
            const decoded: any = jwtDecode(accessToken);

            setToken(accessToken);
            setRole(decoded.role);

            localStorage.setItem("token", accessToken);

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
  setRole(null);
  navigate("/login");
};

    return (
        <AuthContext.Provider value={{ token, role, login, logout }}>
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