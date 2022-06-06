import DrawerHome from "../components/drawer";
import NewSiteModal from "../components/newSiteModal";
import {
  HStack,
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { getAccount } from "../api";
import type { NextPage } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  const [data, setData] = useState({ account: { sites: [] } });
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    console.log({ status });
    // if (status === "unauthenticated") {
    //   console.log("No JWT");
    //   console.log(status);
    //   void signIn();
    // } else if (status === "authenticated") {
    //   void router.push("/");
    // }
  }, [status, router]);

  useEffect(() => {
    setLoading(true);
    fetch(`api/account/${session?.user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [session]);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;

  return (
    <HStack align="flex-start" justify="flex-start">
      <DrawerHome />
      <Box p={10} w="full">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box mb={4}>
            <Heading>Dashboard</Heading>
            <Text color="gray.400">All important metrics at a glance</Text>
          </Box>

          <Spacer />
          <NewSiteModal />
        </Flex>
        <Box mb={4}>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {data?.account?.sites.map((site: any, i: number) => {
              return (
                <Link href={`/sites/${site.id}`} key={`key_${i}`}>
                  <Box cursor="pointer">
                    <GridItem w="100%" h={300} bg="gray.100"></GridItem>
                    {site.name}
                  </Box>
                </Link>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </HStack>
  );
};

export default Home;
