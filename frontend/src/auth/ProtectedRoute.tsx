import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import type { JSX } from "react";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { token, role } = useAuth();

    if (!token) return <Navigate to="/login" replace />;
    if (role !== "ADMIN") return <Navigate to="/" replace />;

    return children;
}