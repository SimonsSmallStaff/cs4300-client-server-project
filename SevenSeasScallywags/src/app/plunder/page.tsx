"use client";
import React, { useState } from 'react';

// Example data for items (you can replace this with real data)
const items = [
  { id: 1, name: 'Item 1', description: 'Description of item 1', saved: true, housing: 'apartment', condition: 'new', status: 'available', category: 'furniture', distance: 5 },
  { id: 2, name: 'Item 2', description: 'Description of item 2', saved: false, housing: 'house', condition: 'used', status: 'sold', category: 'electronics', distance: 10 },
  { id: 3, name: 'Item 3', description: 'Description of item 3', saved: false, housing: 'condo', condition: 'refurbished', status: 'pending', category: 'appliances', distance: 20 },
  { id: 4, name: 'Item 4', description: 'Description of item 4', saved: true, housing: 'townhouse', condition: 'new', status: 'available', category: 'furniture', distance: 50 },
  { id: 5, name: 'Item 5', description: 'Description of item 5', saved: false, housing: 'apartment', condition: 'used', status: 'available', category: 'electronics', distance: 5 },
];

const YourComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [savedItemsOnly, setSavedItemsOnly] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [housing, setHousing] = useState('');
  const [condition, setCondition] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [distance, setDistance] = useState('');

  // Filter items based on various criteria
  const filteredItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => (savedItemsOnly ? item.saved : true))
    .filter((item) => (housing ? item.housing === housing : true))
    .filter((item) => (condition ? item.condition === condition : true))
    .filter((item) => (status ? item.status === status : true))
    .filter((item) => (category ? item.category === category : true))
    .filter((item) => (distance ? item.distance <= parseInt(distance) : true))
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSavedItemsChange = () => {
    setSavedItemsOnly(!savedItemsOnly);
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(e.target.value);
  };

  return (
    <section className="m-[5%]">
      <div className="flex">
        {/* Filters Bar (Left Side) */}
        <div className="w-[10%] min-w-[150px] bg-gray-100 p-4 h-screen text-black">
          <h3 className="font-medium">Filters</h3>
          {/* Housing Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Housing</label>
            <select
              value={housing}
              onChange={(e) => handleFilterChange(e, setHousing)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Housing</option>
              <option value="dorm">Dorm</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Condition Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Condition</label>
            <select
              value={condition}
              onChange={(e) => handleFilterChange(e, setCondition)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Condition</option>
              <option value="new">New</option>
              <option value="used-good">Used-good</option>
              <option value="used-fair">used-fair</option>
            </select>
          </div>

          {/* Status Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={status}
              onChange={(e) => handleFilterChange(e, setStatus)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Status</option>
              <option value="available">Available</option>
              <option value="sold">Sold</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Category Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => handleFilterChange(e, setCategory)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Category</option>
                <option value="">Select Category</option>
                <option value="furniture">Furniture</option>
                <option value="book">Books</option>
                <option value="kitchen">Kitchen</option>
                <option value="school supplies">School Supplies</option>
                <option value="cleaning">Cleaning Supplies</option>
                <option value="other">Other</option>
            </select>
          </div>

          {/* Distance Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Distance</label>
            <select
              value={distance}
              onChange={(e) => handleFilterChange(e, setDistance)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Distance</option>
              <option value="5">5 miles</option>
              <option value="10">10 miles</option>
              <option value="20">20 miles</option>
              <option value="50">50 miles</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          {/* Search Bar */}
          <div className="flex mb-4 bg-white rounded-lg opacity-75 text-black">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search items..."
              className="flex-1 p-2 border rounded-l-lg focus:outline-none"
            />
          </div>

          {/* Filters and Sort Section */}
          <div className="flex items-center justify-between mb-4 bg-amber-800 p-1 rounded-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={savedItemsOnly}
                onChange={handleSavedItemsChange}
                id="savedItems"
                className="mr-2"
              />
              <label htmlFor="savedItems">Saved items</label>
            </div>
            <div className="flex items-center">
              <label htmlFor="sortBy" className="mr-2">Sort by:</label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={handleSortByChange}
                className="p-2 border rounded"
              >
                <option value="">Select</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          {/* Display Items */}
          <div>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div key={item.id} className="p-4 mb-4 border rounded-lg bg-amber-300 text-black">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p>{item.description}</p>
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
};

export default YourComponent;
