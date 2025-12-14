import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="bg-purple-700 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">Sweet Shop</h1>

      <button
        onClick={logout}
        className="bg-purple-900 px-3 py-1 rounded hover:bg-purple-800"
      >
        Logout
      </button>
    </nav>
  );
}