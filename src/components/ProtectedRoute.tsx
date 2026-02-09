import React from 'react';  // ← MUHIM: shu qator kerak
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface Props {
  children: React.ReactNode;  // yoki JSX.Element
}

export default function ProtectedRoute({ children }: Props) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}