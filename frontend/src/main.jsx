import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
// Import the AuthProvider we created earlier
import { AuthProvider } from './context/AuthContext.jsx';

// Use environment variable `VITE_GOOGLE_CLIENT_ID` (set in .env.local)
// Fallback to the string in case env isn't provided (use only for quick local testing).
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || "895363479468-p9o51d8kuv33hajtl642uom3cvq63tvl.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || ''}>
      <GoogleOAuthProvider clientId={clientId}>
        <BrowserRouter>
          {/* FIX: Wrap the entire App in AuthProvider so Navbar can access user data */}
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </ClerkProvider>
  </React.StrictMode>,
)