"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientSideNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <div className="flex items-center gap-4">
      {isLoggedIn ? (
        <>
          <a href="/plunder" className="text-white text-2xl">
            <p>Stash</p>
          </a>
          <a href="/profile" className="text-gray-600 hover:text-gray-800 text-2xl">
            <i className="fas fa-user-circle text-white"></i>
          </a>
          <div className="bg-black p-2 rounded-lg">
            <button onClick={handleLogout} className="text-white">
              Logout
            </button>
          </div>
        </>
      ) : (
        <div className="bg-black p-2 rounded-lg">
          <a href="/login">
            <button className="text-white">Login</button>
          </a>
        </div>
      )}
    </div>
  );
}
