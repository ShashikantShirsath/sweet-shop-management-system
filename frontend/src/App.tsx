import { AuthProvider, useAuth } from "./auth/AuthContext";
import Login from "./pages/Login";
import Sweets from "./pages/Sweets";

function AppContent() {
  const { token } = useAuth();
  return token ? <Sweets /> : <Login />;
}

function App() {

  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
