'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import connectMongoDB from "../../../config/mongodb";
import CollegeSearchDropdown from "../../components/CollegeSearchDropdown.jsx";
import { jwtDecode } from 'jwt-decode';

interface Item {
  _id: string;
  name: string;
  image: string;
  condition: string;
  status: string;
  location: string;
  description: string;
  college: string;
  owner: string;
  category: string;
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
    owner: '',
  });

  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        const res = await fetch('http://localhost:3000/api/items', {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!res.ok) {
          throw new Error('Failed to fetch items');
        }
        let user= 'tim';
        const data = await res.json();
        
        setFilteredItems(data.items.filter((item: Item) => item.owner === user));
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const input = e.target as HTMLInputElement;
      const file = input.files ? input.files[0] : null;

      setFormData((prev) => ({
        ...prev,
        [name]: file
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleRemoveItem = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }
  
      const res = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (!res.ok) {
        throw new Error('Failed to delete item');
      }
  
      setFilteredItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };
  
  interface TokenPayload {
    username: string;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Item:", formData);
  
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
  
    const decoded = jwtDecode<TokenPayload>(token);
    formData.owner = decoded.username;

    const formDataWithImage = new FormData();

  
    for (let key in formData) {
      formDataWithImage.append(key, formData[key as keyof typeof formData]);
    }
  
    const res = await fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
      college: '',
      owner: '',
    });
  
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }
  
        const res = await fetch('http://localhost:3000/api/items', {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        if (!res.ok) {
          throw new Error('Failed to fetch items');
        }
  
        let user = decoded.username;
        const data = await res.json();
        
        setFilteredItems(data.items.filter((item: Item) => item.owner === user));
      } catch (err) {
        console.error(err);
      }
    };
    fetchItems();
  };
  

  

  return (
    <section className="p-4">
      <p></p>
      <div className="flex flex-col md:flex-row gap-8 justify-center mt-10">
        <div className="form md-w-md">
          <form className="bg-white shadow-md rounded-xl p-6 space-y-4 text-black" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center mb-4">List an Item</h2>

            <div>
              <label className="block font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="item name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="furniture">Furniture</option>
                <option value="book">Books</option>
                <option value="kitchen">Kitchen</option>
                <option value="school supplies">School Supplies</option>
                <option value="cleaning">Cleaning Supplies</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700">Condition</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select condition</option>
                <option value="new">New</option>
                <option value="used-good">Used - Good</option>
                <option value="used-fair">Used - Fair</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select status</option>
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="claimed">Claimed</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                placeholder="address or location title"
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">College</label>
              <CollegeSearchDropdown
                apiKey="QR29qgsZRha4UVV0LciyIXXzXin6aYldRs6U33P4"
                onSelectCollege={(selectedCollege: string) => {
                  setFormData((prev) => ({ ...prev, college: selectedCollege }));
                }}
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                placeholder="describe your item..."
                rows={3}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Upload Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-black transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="md:max-w-3xl w-full flex flex-col items-center text-black">
          <div className="userItems w-[80%] text-center bg-white rounded-lg p-2">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {filteredItems.map((item) => (
                  <div
                    key={item._id}
                    className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between min-h-[400px]"
                  >
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[200px] h-full object-cover mx-auto"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/place_holder.jpg";
                        }}
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-end flex-1">
                      <h3 className="text-lg font-semibold text-black mb-2">{item.name}</h3>
                      <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                      <div className="text-sm text-gray-700 space-y-1 mb-3">
                        <div>Condition: {item.condition}</div>
                        <div>Status: {item.status}</div>
                        <div>Location: {item.location}</div>
                        <div>College: {item.college || "N/A"}</div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          className="text-red-500 hover:text-black"
                          onClick={() => handleRemoveItem(item._id)}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">No saved items.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
