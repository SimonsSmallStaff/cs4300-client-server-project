'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function LogoutPage() {
  const router = useRouter();

 useEffect(() => {
    // Clear token from localStorage
    localStorage.removeItem('token');

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

if (token) {
  console.log('User is logged in');
} else {
  console.log('User is logged out');
}

    global.isLoggedIn = false;

    // Redirect to login (or homepage)
    router.push('/login');
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-semibold mb-4">Logging out...</h1>
      <p>You will be redirected shortly.</p>
    </div>
  );
}