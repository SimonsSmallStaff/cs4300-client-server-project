'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // 🎯 Check if token exists
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // if no token, redirect back to login
    }
  }, [router]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
      <p>You are logged in!</p>
    </div>
  );
}
