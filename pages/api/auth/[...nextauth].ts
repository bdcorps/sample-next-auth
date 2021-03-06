import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export default NextAuth({
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ]
})
