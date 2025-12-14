interface SweetCardProps {
  sweet: {
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
  };
  onPurchase: (id: string) => void;
}

export default function SweetCard({ sweet, onPurchase }: SweetCardProps) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h3 className="text-lg font-semibold">{sweet.name}</h3>
      <p className="text-sm text-gray-500">{sweet.category}</p>
      <p className="mt-2">₹ {sweet.price}</p>
      <p className="text-sm">Stock: {sweet.quantity}</p>

      <button
        disabled={sweet.quantity === 0}
        onClick={() => onPurchase(sweet.id)}
        className="mt-3 w-full bg-green-600 text-white py-1 rounded disabled:bg-gray-400"
      >
        Buy 1
      </button>
    </div>
  );
}