'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import connectMongoDB from "../../../config/mongodb";

interface Item {
  _id: string;
  name: string;
  image: string;
  condition: string;
  status: string;
  location: string;
  description: string;
  category: string;
  housing: string;
  saved: boolean;
  college: string;
}

export default function Profile() {
  connectMongoDB();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    condition: '',
    status: '',
    location: '',
    description: '',
    image: '',
    college: '',
  });

  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [housing, setHousing] = useState("");
  const [condition, setCondition] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [savedItemsOnly, setSavedItemsOnly] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchItems = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/items", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("Failed to fetch items");

        const data = await res.json();
        setItems(data.items);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();
  }, [router]);

  useEffect(() => {
    let results = [...items];

    // Filter based on the "saved" toggle
    if (savedItemsOnly) results = results.filter((item) => item.saved);
    if (housing) results = results.filter((item) => item.housing === housing);
    if (condition) results = results.filter((item) => item.condition === condition);
    if (status) results = results.filter((item) => item.status === status);
    if (category) results = results.filter((item) => item.category === category);

    if (searchTerm) {
      results = results.filter((item) => {
        // Check if any field contains the search term (case insensitive)
        const searchFields = Object.values(item).map((field) => field.toString().toLowerCase());
        return searchFields.some((field) => field.includes(searchTerm.toLowerCase()));
      });
    }

    if (sortBy) {
      results.sort((a, b) =>
        a[sortBy as keyof Item]?.toString().localeCompare(b[sortBy as keyof Item]?.toString())
      );
    }

    setFilteredItems(results);
  }, [
    housing,
    condition,
    status,
    category,
    searchTerm,
    sortBy,
    savedItemsOnly,
    items,
  ]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const handleSaveItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, saved: !item.saved } : item
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formDataWithImage = new FormData();
    for (let key in formData) {
      formDataWithImage.append(key, formData[key as keyof typeof formData]);
    }

    const res = await fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formDataWithImage,
    });

    if (!res.ok) throw new Error('Failed to submit item');

    setFormData({
      name: '',
      category: '',
      condition: '',
      status: '',
      location: '',
      description: '',
      image: '',
      college: '', // Reset college
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section className="p-4">
      <div className="flex">
        <div className="w-[10%] min-w-[200px] p-4 h-screen text-white overflow-y-auto rounded-lg shadow-lg" style={{ backgroundColor: "#3c2222" }}>
          <h3 className="font-bold text-lg mb-4">Filters</h3>
          {/* Filter Blocks */}
          {[ 
            ["Housing", housing, setHousing, ["Dorm", "House", "Apartment", "Other"]], 
            ["Condition", condition, setCondition, ["New", "Used-good", "Used-fair"]],
            ["Status", status, setStatus, ["Available", "Sold", "Pending", "Claimed"]],
            ["Category", category, setCategory, ["Furniture", "Books", "Kitchen", "School Supplies", "Cleaning Supplies", "Other"]],
          ].map(([label, value, setter, options], i) => (
            <div className="mb-4" key={i}>
              <select
                value={value}
                onChange={(e) => handleFilterChange(e, setter)}
                className="w-full mt-1 p-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select {label}</option>
                {(options as string[]).map((opt) => (
                  <option key={opt} value={opt.toLowerCase()}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button
            onClick={() => {
              setHousing("");
              setCondition("");
              setStatus("");
              setCategory("");
              setSearchTerm("");
              setSortBy("");
              setSavedItemsOnly(false);
            }}
            className="w-full p-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Reset Filters
          </button>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-4">
          {/* Search Bar */}
          <div className="flex mb-4 bg-white rounded-lg opacity-75 text-black">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search across all fields..."
              className="flex-1 p-2 border rounded-l-lg focus:outline-none"
            />
          </div>

          {/* Sort & Saved Toggle */}
          <div className="flex items-center justify-between mb-4 bg-amber-800 p-2 rounded-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={savedItemsOnly}
                onChange={(e) => setSavedItemsOnly(e.target.checked)}
                id="savedItems"
                className="mr-2"
              />
              <label htmlFor="savedItems">Saved items</label>
            </div>
            <div className="flex items-center">
              <label htmlFor="sortBy" className="mr-2">
                Sort by:
              </label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border rounded text-black bg-white"
              >
                <option value="">Select</option>
                <option value="name">Name</option>
                <option value="location">Location</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          {/* Item List */}
          <div>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center bg-white p-4 mb-4 rounded-lg shadow-lg"
                >
                  <div className="flex-shrink-0 w-1/5 mr-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto rounded-lg"
                    />
                    <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-sm font-medium text-gray-700">
                      <span className="mr-2">Condition: {item.condition}</span>
                      <span className="mr-2">Status: {item.status}</span>
                      <span className="mr-2">Location: {item.location}</span>
                      <span className="mr-2">College: {item.college || "N/A"}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-1/4 ml-4">
                    <p className="text-sm text-gray-700 flex-1">
                      {item.description}
                    </p>
                    <button
                      className={`hover:text-green-700 ${item.saved ? "text-red-500" : "text-green-500"}`}
                      onClick={() => handleSaveItem(item._id)}
                    >
                      <i className={item.saved ? "fas fa-minus" : "fas fa-plus"}></i>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No items found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
