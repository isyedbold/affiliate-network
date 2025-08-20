"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Footer from "@/components/sections/footer";

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your sign-in logic here
    console.log('Sign in:', { email, password })
    // Example: router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div id="signin-top"></div>
      
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-black">
              Sign in
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Enter your credentials to sign in to your account.
            </p>
          </div>

          <form 
            className="mt-8 space-y-6" 
            role="form"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <div>
                <Label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 shadow-sm border"
                />
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-semibold text-black mb-2">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  aria-required="true"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 shadow-sm border"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button 
                type="button"
                className="text-sm font-medium text-black hover:text-gray-600 hover:underline"
              >
                Forgot your password?
              </button>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                Sign in
              </Button>
            </div>

            <div className="text-center">
              <Link 
                href="/" 
                className="text-sm font-medium text-black hover:text-gray-600 hover:underline"
              >
                Back to home
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}