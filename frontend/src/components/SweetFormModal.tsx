import { useState, useEffect } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

interface SweetFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  sweet?: any; // if present → edit mode
}

export default function SweetFormModal({
  isOpen,
  onClose,
  onSuccess,
  sweet,
}: SweetFormModalProps) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const isEdit = Boolean(sweet);

  useEffect(() => {
    if (sweet) {
      setForm({
        name: sweet.name,
        category: sweet.category,
        price: String(sweet.price),
        quantity: String(sweet.quantity),
      });
    }
  }, [sweet]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(!form.name || !form.category || !form.price || !form.quantity){
      toast.error("All fields are required");
      return;
    }    

    try {
      const payload = {
        ...form,
        price: Number(form.price),
        quantity: Number(form.quantity),
      };

      if (isEdit) {
        await api.put(`/sweets/${sweet.id}`, payload);
        toast.success("Sweet updated");
        setForm({name: "", category: "", price: "", quantity: "",});
      } else {
        await api.post("/sweets", payload);
        toast.success("Sweet added");
        setForm({name: "", category: "", price: "", quantity: "",});
      }

      onSuccess();
      onClose();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Operation failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          {isEdit ? "Edit Sweet" : "Add Sweet"}
        </h2>

        {["name", "category", "price", "quantity"].map((field) => (
          <input
            key={field}
            className="w-full mb-3 p-2 border rounded"
            placeholder={field}
            value={(form as any)[field]}
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
          />
        ))}

        <div className="flex gap-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {isEdit ? "Update" : "Add"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-300 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
