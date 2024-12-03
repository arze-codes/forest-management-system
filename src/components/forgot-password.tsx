import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Add the forgot password logic
		try {
			// Example API call
			const response = await fetch('/api/forgot-password', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email })
			});

			if (response.ok) {
				setMessage('Password reset link sent to your email.');
			} else {
				setMessage('Failed to send password reset link.');
			}
		} catch {
			setMessage('An error occurred. Please try again.');
		}
	};

	return (
		<div className="forgot-password-container">
			<h2>Forgot Password</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
};
export default ForgotPassword;
