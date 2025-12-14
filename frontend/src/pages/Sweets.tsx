import { useEffect, useState } from "react";
import api from "../api/axios";
import SweetCard from "../components/SweetCard";
import Navbar from "../components/Navbar";
import SweetFormModal from "../components/SweetFormModal";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

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
    const [loading, setLoading] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSweet, setSelectedSweet] = useState<any>(null);

    const fetchSweets = async () => {
        try {
            setLoading(true);
            const response = await api.get("/sweets", {
                params: { search, category },
            });
            setSweets(response.data);
        } catch (err: any) {
            toast.error("Failed to fetch sweets");
        } finally {
            setLoading(false);
        }
    };

    const purchaseSweet = async (id: string, quantity: number) => {
        try {
            await api.post(`/sweets/${id}/purchase`, { quantity });
            toast.success("Sweet purchased");
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Purchase failed");
        }
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
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Delete failed");
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

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <ClipLoader size={50} color="#7c3aed" />
                    </div>
                ) : sweets.length === 0 ? (
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
                                onEdit={(s: any) => {
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