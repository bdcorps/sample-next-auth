import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button, Text } from "@chakra-ui/react"

export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <header>
      <div>
        <p>
          {!session && (
            <>
              <Text>You are not signed in</Text>
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </Button>
            </>
          )}
          {session?.user && (
            <>
              <Text>{`Signed in as ${
                session.user.email ?? session.user.name
              }`}</Text>
              <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
    </header>
  )
}
