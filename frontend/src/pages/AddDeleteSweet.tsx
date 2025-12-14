import { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

export default function AddDeleteSweet() {
  const [sweets, setSweets] = useState<any[]>([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const fetchSweets = async () => {
    const res = await api.get("/sweets");
    setSweets(res.data);
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  const addSweet = async () => {
    try {
      await api.post("/sweets", {
        ...form,
        price: Number(form.price),
        quantity: Number(form.quantity),
      });
      toast.success("Sweet added");
      setForm({ name: "", category: "", price: "", quantity: "" });
      fetchSweets();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to add sweet");
    }
  };

  const deleteSweet = async (id: string) => {
    try {
      await api.delete(`/sweets/${id}`);
      toast.success("Sweet deleted");
      fetchSweets();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (<>
    <Navbar />
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin – Manage Sweets</h2>

      {/* ADD FORM */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {["name", "category", "price", "quantity"].map((field) => (
          <input
            key={field}
            className="input"
            placeholder={field}
            value={(form as any)[field]}
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
          />
        ))}
      </div>

      <button onClick={addSweet} className="btn-primary mb-6">
        Add Sweet
      </button>

      {/* LIST */}
      <div className="grid grid-cols-3 gap-4">
        {sweets.map((s) => (
          <div key={s.id} className="card">
            <h3 className="font-semibold">{s.name}</h3>
            <p>{s.category}</p>
            <p>₹{s.price}</p>
            <p>Qty: {s.quantity}</p>

            <button
              onClick={() => deleteSweet(s.id)}
              className="btn-danger mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
    </>)
}
