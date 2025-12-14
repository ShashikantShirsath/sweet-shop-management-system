import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import Login from "./pages/Login";
import Sweets from "./pages/Sweets";
import Register from "./pages/Register";

import ProtectedRoute from "./auth/ProtectedRoute";
import PublicRoute from "./auth/PublicRoute";
import AddDeleteSweet from "./pages/AddDeleteSweet";


function AppContent() {
  const { token } = useAuth();
  return token ? <Sweets /> : <Login />;
}

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="/"
            element={
              
                <Sweets />
              
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AddDeleteSweet />
              </ProtectedRoute>
            }
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
