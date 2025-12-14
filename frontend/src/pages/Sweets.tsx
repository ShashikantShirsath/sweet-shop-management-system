import { useEffect, useState } from "react";
import api from "../api/axios";
import SweetCard from "../components/SweetCard";
import Navbar from "../components/Navbar";
import SweetFormModal from "../components/SweetFormModal";
import toast from "react-hot-toast";

interface Sweet {
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
}

export default function Sweets() {
    const [sweets, setSweets] = useState<Sweet[]>([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSweet, setSelectedSweet] = useState<any>(null);

    const fetchSweets = async () => {
        const response = await api.get("/sweets", {
            params: {
                search,
                category
            }
        });
        setSweets(response.data);
    };

    const purchaseSweet = async (id: string) => {
        await api.post(`/sweets/${id}/purchase`, { quantity: 1 });
        fetchSweets();
    };

    useEffect(() => {
        fetchSweets();
    }, [search, category]);

    const deleteSweet = async (id: string) => {
        try {
            await api.delete(`/sweets/${id}`);
            toast.success("Sweet deleted");
            fetchSweets();
        } catch {
            toast.error("Delete failed");
        }
    };


    return (
        <>
            <Navbar onAdd={() => {
                setSelectedSweet(null);
                setIsModalOpen(true);
            }} />

            <SweetFormModal
                isOpen={isModalOpen}
                sweet={selectedSweet}
                onClose={() => setIsModalOpen(false)}
                onSuccess={fetchSweets}
            />
            <div className="bg-gray-100 min-h-screen p-6">
                {/* Search & Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Search sweets..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="p-2 border rounded w-full sm:w-1/2"
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="p-2 border rounded w-full sm:w-1/4"
                    >
                        <option value="">All Categories</option>
                        <option value="Indian">Indian</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Bakery">Bakery</option>
                    </select>
                </div>

                {sweets.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No sweets found.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {sweets.map((sweet) => (
                            <SweetCard
                                key={sweet.id}
                                sweet={sweet}
                                onPurchase={purchaseSweet}
                                onEdit={(s:any) => {
                                    setSelectedSweet(s);
                                    setIsModalOpen(true);
                                }}
                                onDelete={deleteSweet}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}