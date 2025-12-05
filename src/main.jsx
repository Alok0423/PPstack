import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
// Import the AuthProvider we created earlier
import { AuthProvider } from './context/AuthContext';

// FIX: We added quotes "" around the ID.
// Note: A real Google Client ID usually ends with ".apps.googleusercontent.com"
// Make sure you copied the WHOLE string from Google Cloud.
const clientId = "895363479468-p9o51d8kuv33hajtl642uom3cvq63tvl.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        {/* FIX: Wrap the entire App in AuthProvider so Navbar can access user data */}
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)