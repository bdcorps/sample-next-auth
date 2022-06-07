import {
  Flex,
  Center,
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
  Button,
  Container,
} from "@chakra-ui/react";
import { getProviders, signIn, useSession } from "next-auth/react";

export default function SignIn({ providers }: any) {
  return (
    <>
      <Flex justify="center" h="100vh" align="center">
        <Container w="100%" centerContent>
          <Box style={{ width: 500 }}>
            <VStack spacing={4} align="center">
              <Heading>Log in to Launchman</Heading>

              {providers &&
                Object.values(providers).map((provider: any) => (
                  <Box key={provider.name}>
                    <Button
                      onClick={() =>
                        signIn(provider.id, {
                          callbackUrl: window.location.href,
                        })
                      }
                    >
                      Sign in with Google
                    </Button>
                  </Box>
                ))}
            </VStack>
          </Box>
        </Container>
      </Flex>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const {
    NEXTAUTH_URL,
    NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
  } = process.env;
  console.log(
    { NEXTAUTH_URL },
    { NEXTAUTH_SECRET },
    { GOOGLE_CLIENT_ID },
    { GOOGLE_CLIENT_SECRET }
  );

  const providers = await getProviders();
  console.log({ providers });
  return {
    props: { providers },
  };
}
