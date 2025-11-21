import React from 'react'
import FormInput from '../components/ui/FormInput'
import GradientButton from '../components/ui/GradientButton'

export default function Signup(){
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md card-glass p-8 rounded-xl">
        <h2 className="text-2xl font-semibold">Create your account</h2>
        <form className="mt-6 space-y-4">
          <FormInput label="Full name" type="text" placeholder="Your name" />
          <FormInput label="Email" type="email" placeholder="you@domain.com" />
          <FormInput label="Password" type="password" placeholder="Create a password" />
          <GradientButton type="submit" className="w-full">Create account</GradientButton>
        </form>
      </div>
    </div>
  )
}
