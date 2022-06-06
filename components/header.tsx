import { signIn, signOut, useSession } from "next-auth/react"
import React from "react"
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
              <Text>Signed out</Text>
              <Button
                onClick={(e: any) => {
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
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                />
              )}
              <Text>
                Signed in as {session.user.email ?? session.user.name}
              </Text>
              <Button
                onClick={(e: any) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </Button>
            </>
          )}
        </p>
      </div>
    </header>
  )
}
