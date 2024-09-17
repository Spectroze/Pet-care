import User from '@/models/User'
import connect from '@/utils/db'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const { email, password } = await request.json()

    await connect()

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        return new NextResponse('Email is already in use', { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser = new User({
        email,
        password: hashedPassword
    })

    try {
        await newUser.save()
        return new NextResponse('User is registered', { status: 200 })
    } catch (err) {
        console.error(err)
        return new NextResponse('Server error', { status: 500 })
    }
}
