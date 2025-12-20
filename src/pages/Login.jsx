import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginWithEmail, loginWithGoogle } from '../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleSuccess = async (credentialResponse) => {
    setError('');
    setLoading(true);
    try {
      const token = credentialResponse?.credential;
      if (!token) throw new Error('No credential returned from Google');
      const data = await loginWithGoogle(token);
      login(data);
      navigate('/dashboard');
    } catch (err) {
      console.error('Google login failed', err);
      setError(err.message || 'Google login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await loginWithEmail(form.email, form.password);
      login(data);
      navigate('/dashboard');
    } catch (err) {
      console.error('Email login failed', err);
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-4">
      <div className="max-w-xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold mb-4 text-center text-slate-800">Welcome back</h2>
        <p className="text-sm text-center text-slate-500 mb-6">Login to continue to PPStack</p>

        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-sky-400 px-3 py-2"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <input
                  name="password"
                  value={form.password}
                  onChange={handleInput}
                  type="password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-sky-400 px-3 py-2"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <Link to="/contact" className="text-sky-600 hover:underline">Forgot?</Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 rounded-md transition-colors"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-4">
              Don’t have an account? <Link to="/signup" className="text-sky-600 font-medium">Create one</Link>
            </p>
          </div>

          <div className="w-px bg-slate-100 hidden sm:block" />

          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="mb-4 text-sm text-slate-500">Or sign in with</div>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError('Google login failed')}
            />
            <div className="text-xs text-slate-400 mt-3">We only use Google to verify your identity.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;