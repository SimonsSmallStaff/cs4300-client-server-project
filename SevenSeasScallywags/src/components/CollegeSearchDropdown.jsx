import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollegeSearchDropdown = ({ apiKey, onSelectCollege }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [colleges, setColleges] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (searchTerm === '') {
      setColleges([]);
      return;
    }

    const fetchColleges = async () => {
      setErrorMessage('');
      try {
        const response = await axios.get(
          `https://api.data.gov/ed/collegescorecard/v1/schools`, {
            params: {
              api_key: apiKey,
              school_name: searchTerm,
              fields: 'id,school.name',
              per_page: 10,
              sort: 'school.name',
            }
          }
        );
        setColleges(response.data.results);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          setErrorMessage('You have reached the API rate limit. Please try again later.');
        } else {
          console.error('Error fetching colleges:', error);
        }
      }
    };

    fetchColleges();
  }, [searchTerm, apiKey]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectCollege = (collegeName) => {
    setSearchTerm(collegeName);
    setColleges([]);
    onSelectCollege?.(collegeName);
  };


  return (
    <div className="relative">
      <div className="flex space-x-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for a college"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {searchTerm && colleges.length > 0 && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {colleges.map((college) => (
            <div
              key={college.id}
              onClick={() => handleSelectCollege(college['school.name'])}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {college['school.name']}
            </div>
          ))}
        </div>
      )}

      {errorMessage && (
        <div className="text-red-500 mt-2 text-sm">{errorMessage}</div>
      )}
    </div>
  );
};

export default CollegeSearchDropdown;
