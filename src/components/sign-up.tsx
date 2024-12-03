import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignUp = (event: React.FormEvent) => {
		event.preventDefault();
		// Handle sign up logic here
		console.log('Sign Up:', { email, password });
	};

	const navigateToSignIn = () => {
		navigate('/signin');
	};

	const navigateToForgotPassword = () => {
		navigate('/forgot-password');
	};

	return (
		<div
			className="flex h-screen flex-col items-center justify-center bg-cover bg-center"
			style={{ backgroundImage: 'url(/path/to/forest-background.jpg)' }}
		>
			<div className="w-full max-w-md rounded-lg bg-black bg-opacity-70 p-8">
				<h1 className="mb-6 text-2xl font-bold text-white">Sign Up</h1>
				<form onSubmit={handleSignUp}>
					<div className="mb-4">
						<label htmlFor="email" className="mb-2 block text-white">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="password" className="mb-2 block text-white">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							required
							className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="w-full rounded-lg bg-green-600 py-2 font-bold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
					>
						Sign Up
					</button>
					<div className="mt-4 text-center">
						<button
							type="button"
							onClick={navigateToForgotPassword}
							className="text-green-500 hover:underline focus:outline-none"
						>
							Forgot password?
						</button>
					</div>
					<div className="mt-2 text-center">
						<button
							type="button"
							onClick={navigateToSignIn}
							className="text-green-500 hover:underline focus:outline-none"
						>
							Already have an account? Sign In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
