import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useUser } from '@clerk/clerk-react';

export default function ProtectedRoute({ children }){
  // Prefer Clerk's auth if available
  const { isLoaded, isSignedIn } = useUser() || {};
  const { user, loading } = useAuth();

  // If Clerk is loaded, use it
  if (isLoaded) {
    if (!isSignedIn) return <Navigate to="/login" replace />;
    return children;
  }

  if (loading) return null; // or a spinner
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
