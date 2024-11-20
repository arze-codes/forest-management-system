'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const SignIn: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

	const validate = () => {
		const newErrors: { email?: string; password?: string } = {};
		if (!email) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			newErrors.email = 'Email address is invalid';
		}
		if (!password) {
			newErrors.password = 'Password is required';
		} else if (password.length < 6) {
			newErrors.password = 'Password must be at least 6 characters';
		}
		return newErrors;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			// Handle successful form submission
			console.log('Form submitted successfully');
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-green-100">
			<form onSubmit={handleSubmit} className="w-full max-w-sm rounded bg-white p-6 shadow-md">
				<h2 className="mb-4 text-2xl font-bold text-green-800">Sign In</h2>
				<div className="mb-4">
					<label htmlFor="email" className="block text-green-700">
						Email
					</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={`mt-1 block w-full border px-3 py-2 ${errors.email ? 'border-red-500' : 'border-green-300'} rounded-md shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm`}
					/>
					{errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
				</div>
				<div className="mb-4">
					<label htmlFor="password" className="block text-green-700">
						Password
					</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className={`mt-1 block w-full border px-3 py-2 ${errors.password ? 'border-red-500' : 'border-green-300'} rounded-md shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm`}
					/>
					{errors.password && <span className="text-sm text-red-500">{errors.password}</span>}
				</div>
				<button
					type="submit"
					className="w-full rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
				>
					Sign In
				</button>
				<div className="mt-4 text-center">
					<Link href="/forgot-password" className="text-green-500 hover:underline">
						Forgot Password?
					</Link>
				</div>
				<div className="mt-2 text-center">
					<span className="text-green-700">Don&apos;t have an account? </span>
					<Link href="/sign-up" className="text-green-500 hover:underline">
						Sign Up
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
