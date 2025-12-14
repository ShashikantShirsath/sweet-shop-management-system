import { useAuth } from "../auth/AuthContext";

export default function Navbar({ onAdd }: { onAdd?: () => void }) {
  const { logout, role } = useAuth();

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">Sweet Shop</h1>

      <div className="flex gap-3 items-center">
        {role === "ADMIN" && (
          <button
            onClick={onAdd}
            className="bg-blue-800 px-3 py-1 rounded hover:bg-blue-900"
          >
            Add Sweet
          </button>
        )}

        <button
          onClick={logout}
          className="bg-red-800 px-3 py-1 rounded hover:bg-red-900"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}