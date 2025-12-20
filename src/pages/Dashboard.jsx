import React from 'react'
import { useAuth } from '../context/AuthContext'
import LearnerDashboard from './LearnerDashboard'
import TutorDashboard from './TutorDashboard'

export default function Dashboard(){
  const { user } = useAuth();

  // If user is instructor/tutor (isAdmin true), show tutor dashboard
  if (user?.isAdmin) {
    return <TutorDashboard />
  }

  return <LearnerDashboard />
}
