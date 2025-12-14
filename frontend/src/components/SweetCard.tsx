import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import toast from "react-hot-toast";

export default function SweetCard({
    sweet,
    onPurchase,
    onEdit,
    onDelete,
}: any) {
    const { role } = useAuth();
    const [qty, setQty] = useState(1);

    const isOutOfStock = sweet.quantity === 0;

    const handlePurchase = () => {
        if (qty <= 0) {
            toast.error("Quantity must be at least 1");
            return;
        }

        if (qty > sweet.quantity) {
            toast.error("Entered quantity exceeds available stock");
            return;
        }

        onPurchase(sweet.id, qty);
        setQty(1);
    };

    return (
        <div className="bg-white p-4 rounded shadow flex flex-col gap-2">
            <h3 className="font-semibold">{sweet.name}</h3>
            <p>{sweet.category}</p>
            <p>₹{sweet.price}</p>
            <p className="text-sm text-gray-600">
                Available: {sweet.quantity}
            </p>

            {/* PURCHASE ROW */}
            <div className="flex items-center gap-2 mt-2">
                <input
                    type="number"
                    min={1}
                    max={sweet.quantity}
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    disabled={isOutOfStock}
                    className="w-16 p-1 border rounded text-center"
                />

                <button
                    onClick={handlePurchase}
                    disabled={isOutOfStock}
                    className={`flex-1 py-1 rounded ${isOutOfStock
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                >
                    Purchase
                </button>
            </div>

            {/* ADMIN ACTIONS */}
            {role === "ADMIN" && (
                <div className="flex gap-2 mt-2">
                    <button
                        onClick={() => onEdit(sweet)}
                        className="flex-1 bg-blue-500 text-white py-1 rounded"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(sweet.id)}
                        className="flex-1 bg-red-500 text-white py-1 rounded"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}
