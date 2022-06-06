import {
  Center,
  VStack,
  Box,
  Heading,
  Button,
  Text,
  Image,
  Flex,
  Container,
  HStack,
} from "@chakra-ui/react";
import { getAllPages, getSite } from "api";
import { NextPage } from "next";
import { useState, useEffect } from "react";

// const data: any = {
//   123: {
//     page1: {
//       headline: "Remove sound from your video online",
//       description: "1",
//       image: "https://cdn.kapwing.com/static/muteVideoControl.jpeg",
//       ctaText: "Try for free",
//     },
//   },
// };

// {"headline": "Remove sound from your video online",
// "description": "1",
// "image": "https://cdn.kapwing.com/static/muteVideoControl.jpeg",
// "ctaText": "Try for free"}

const Site: NextPage = ({
  site,
  headline,
  description,
  image,
  ctaText,
}: any) => {
  return (
    <Container maxW="container.xl">
      <Box padding="4" color="black" w="full">
        <Center p={4}>
          <Text fontWeight={500} fontSize="lg" color="#5000FF">
            {site.name}
          </Text>
        </Center>
        <Center pt="20vh" py={8} w="full">
          <VStack spacing={30} w="full">
            <HStack spacing={10} w="full" wrap="wrap">
              <Box textAlign="left" flex="1">
                <Heading size="xl" mb={4}>
                  {headline}
                </Heading>
                <Text fontSize="xl">{description}</Text>
                <Button mt={10} colorScheme="brand" size="sm">
                  {ctaText} ➜
                </Button>
              </Box>

              <Box flex="2">
                <Image src={image} alt="image"></Image>
              </Box>
            </HStack>

            <Text fontWeight={500}>Trusted by x people worldwide</Text>

            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            ></Box>

            <Text fontWeight={500}>Ready? Lets do this!</Text>
            <Button size="lg" colorScheme="brand">
              {ctaText}
            </Button>
          </VStack>
        </Center>
      </Box>
    </Container>
  );
};

export async function getServerSideProps({ params }: any) {
  const { site, slug } = params;

  const site1 = await getSite(site);
  const page: any = await getAllPages(site, slug);
  console.log(page);

  // console.log(site1);
  const props = { ...page.data, site: site1 };

  return {
    props,
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { site: "123", slug: "page1" } }],
//     fallback: true,
//   };
// }

export default Site;
