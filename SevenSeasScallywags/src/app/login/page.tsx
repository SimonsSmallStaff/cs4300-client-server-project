'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type FormData = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
	  if (response.ok) {
        // Save token to localStorage
        localStorage.setItem('token', result.token);
        // Redirect to dashboard
        //router.push('/dashboard');
		router.push('/plunder');
      } else {
        alert(result.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input {...register('username')} placeholder="Username" className="border p-2" />
      <input {...register('password')} type="password" placeholder="Password" className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">Login / Register</button>
    </form>
  );
}
