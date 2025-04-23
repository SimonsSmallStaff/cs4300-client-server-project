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
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6 mt-15 text-black">
  <h2 className="text-2xl font-semibold text-center text-gray-700">Login / Register</h2>

  <div>
    <label htmlFor="username" className="block text-gray-600 font-medium">Username</label>
    <input
      id="username"
      {...register('username')}
      placeholder="Enter your username"
      className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
    />
  </div>

  <div>
    <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
    <input
      id="password"
      {...register('password')}
      type="password"
      placeholder="Enter your password"
      className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
    />
  </div>

  <button
    type="submit"
    className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 transition duration-200"
  >
    Login / Register
  </button>
</form>


  );
}
