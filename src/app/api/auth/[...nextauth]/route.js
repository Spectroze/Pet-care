import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import User from '@/models/User'
import connect from '@/utils/db'

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                await connect()
                try {
                    const user = await User.findOne({
                        email: credentials.email
                    })
                    if (
                        user &&
                        (await bcrypt.compare(
                            credentials.password,
                            user.password
                        ))
                    ) {
                        return user
                    }
                } catch (err) {
                    console.error('Error during authorization:', err)
                    throw new Error('Authorization error')
                }
                return null
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? ''
        })
        // Add more providers here if needed
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === 'credentials') {
                return true
            }
            if (account?.provider === 'github') {
                await connect()
                try {
                    const existingUser = await User.findOne({
                        email: user.email
                    })
                    if (!existingUser) {
                        const newUser = new User({ email: user.email })
                        await newUser.save()
                    }
                    return true
                } catch (err) {
                    console.error('Error saving user:', err)
                    return false
                }
            }
            return false
        }
    },
    pages: {
        signIn: '/'
        // Add more custom pages if needed
    }
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
