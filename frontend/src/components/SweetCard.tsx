import { useAuth } from "../auth/AuthContext";

export default function SweetCard({
  sweet,
  onPurchase,
  onEdit,
  onDelete,
}: any) {
  const { role } = useAuth();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">{sweet.name}</h3>
      <p>{sweet.category}</p>
      <p>₹{sweet.price}</p>
      <p>Qty: {sweet.quantity}</p>

      <button
        disabled={sweet.quantity === 0}
        onClick={() => onPurchase(sweet.id)}
        className={`mt-2 w-full py-1 rounded ${
          sweet.quantity === 0
            ? "bg-gray-300"
            : "bg-green-600 text-white"
        }`}
      >
        Purchase
      </button>

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
