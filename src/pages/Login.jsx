import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      // 1. Get the token from Google
      const { credential } = credentialResponse;

      // 2. Send it to YOUR Backend
      const res = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credential }),
      });

      const data = await res.json();

      if (res.ok) {
        // 3. Login Success
        console.log('Login Success:', data);
        localStorage.setItem('user', JSON.stringify(data)); // Save user
        navigate('/dashboard'); // Go to dashboard
      } else {
        console.error('Login Failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to PPStack</h2>
        
        {/* The Google Button */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
        
        <p className="mt-4 text-center text-sm text-gray-500">
            Or login with email/password below...
        </p>
      </div>
    </div>
  );
};

export default Login;