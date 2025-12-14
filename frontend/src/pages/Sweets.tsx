import { useEffect, useState } from "react";
import api from "../api/axios";
import SweetCard from "../components/SweetCard";

interface Sweet {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

export default function Sweets() {
  const [sweets, setSweets] = useState<Sweet[]>([]);

  const fetchSweets = async () => {
    const response = await api.get("/sweets");
    setSweets(response.data);
  };

  const purchaseSweet = async (id: string) => {
    await api.post(`/sweets/${id}/purchase`, { quantity: 1 });
    fetchSweets();
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Sweet Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sweets.map((sweet) => (
          <SweetCard
            key={sweet.id}
            sweet={sweet}
            onPurchase={purchaseSweet}
          />
        ))}
      </div>
    </div>
  );
}