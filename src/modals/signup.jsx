'use client'
import React, { useState, useEffect } from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Label } from '../components/ui/label'
import { PawPrint, X, CheckCircle } from 'lucide-react'
import LoginModal from './signin'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function SignupModal({ onClose, onSignup }) {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(true)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const router = useRouter()
    const { data: session, status: sessionStatus } = useSession()

    useEffect(() => {
        if (sessionStatus === 'authenticated') {
            router.replace('/dashboard')
        }
    }, [sessionStatus, router])

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        return emailRegex.test(email)
    }

    const validatePassword = (password) => {
        const passwordCriteria =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
        return passwordCriteria.test(password)
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value
        setPassword(value)
        setIsPasswordValid(validatePassword(value))
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        setError('')

        if (!isValidEmail(email)) {
            setError('Email is invalid')
            return
        }

        if (!isPasswordValid) {
            setError('Password is invalid')
            return
        }

        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, fullName })
            })

            if (res.status === 400) {
                setError('This email is already registered')
            } else if (res.status === 200) {
                setError('')
                router.push('/login')
                onSignup()
                handleClose()
            } else {
                setError('Error, try again')
            }
        } catch (error) {
            setError('Error, try again')
            console.log(error)
        }
    }

    const handleClose = () => {
        setIsAnimating(false)
        setTimeout(onClose, 300)
    }

    if (sessionStatus === 'loading') {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div
                className="fixed inset-0 bg-black flex items-center justify-center p-4"
                style={{ backdropFilter: 'blur(5px)', zIndex: 9999 }}
                onClick={handleClose}>
                <div
                    className={`bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full relative transition-all duration-300 ease-in-out ${
                        isAnimating
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0'
                    }`}
                    onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                        aria-label="Close signup modal">
                        <X size={24} />
                    </button>
                    <div className="flex flex-col md:flex-row">
                        {/* Left side section */}
                        <div className="md:w-1/2 p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                Sign Up to Pethub
                            </h2>
                            <form className="space-y-4" onSubmit={handleSignup}>
                                {error && (
                                    <p className="text-red-500 text-center mb-4">
                                        {error}
                                    </p>
                                )}
                                <div className="space-y-2 text-black">
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input
                                        id="fullName"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={fullName}
                                        onChange={(e) =>
                                            setFullName(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="space-y-2 text-black">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="space-y-2 text-black">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                    <div className="flex items-center mt-2">
                                        {isPasswordValid ? (
                                            <CheckCircle
                                                size={24}
                                                className="text-green-500"
                                            />
                                        ) : (
                                            <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                                        )}
                                        <p className="ml-2 text-sm">
                                            Must start with a letter, include at
                                            least one number, one lowercase
                                            letter, and one uppercase letter.
                                        </p>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                                    Sign Up
                                </Button>
                            </form>

                            <div className="mt-6">
                                <p className="text-center text-sm text-gray-600 mb-2">
                                    Or sign up with:
                                </p>
                                <div className="flex space-x-4">
                                    <Button
                                        variant="outline"
                                        className="text-black flex-1 hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4] transition-colors duration-200">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="mr-2 h-6 w-6"
                                            fill="currentColor">
                                            <path
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                fill="#4285F4"
                                            />
                                            <path
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                fill="#34A853"
                                            />
                                            <path
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                fill="#FBBC05"
                                            />
                                            <path
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                fill="#EA4335"
                                            />
                                        </svg>
                                        Google
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="text-black flex-1 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors duration-200">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="mr-2 h-6 w-6"
                                            fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        Facebook
                                    </Button>
                                </div>
                            </div>
                            <p className="mt-6 text-center text-sm text-gray-600">
                                Already have an account?{' '}
                                <a
                                    onClick={() => setLoginModalOpen(true)}
                                    href="#"
                                    className="text-blue-600 hover:underline transition-colors duration-200">
                                    Log In
                                </a>
                            </p>
                        </div>

                        {/* Right side section */}
                        <div className="md:w-1/2 bg-blue-600 p-8 flex flex-col justify-center items-center text-white">
                            <div className="mb-6">
                                <PawPrint size={80} className="text-white" />
                            </div>
                            <h1 className="text-3xl font-bold mb-4">
                                Join Pethub Today!
                            </h1>
                            <p className="text-center text-lg">
                                Your one-stop solution for pet care management.
                            </p>
                            <div className="mt-6 flex items-center justify-center space-x-2 text-white pb-1">
                                <PawPrint size={40} />
                                <span className="text-2xl font-semibold">
                                    PetCare Hub
                                </span>
                                <PawPrint size={40} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isLoginModalOpen && (
                <LoginModal
                    onClose={() => setLoginModalOpen(false)}
                    onLogin={onSignup}
                />
            )}
        </>
    )
}
