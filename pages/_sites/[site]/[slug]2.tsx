import {
  Center,
  VStack,
  Box,
  Heading,
  Button,
  Text,
  Image,
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

const Site: NextPage = ({ headline, description, image, ctaText }: any) => {
  return (
    <Center w="100vw" mt="20vh">
      <VStack spacing={30}>
        <Box textAlign="center">
          <Heading>{headline}</Heading>
          <Text>{description}</Text>
          <Button size="lg" mt={10} colorScheme="purple">
            {ctaText}
          </Button>
        </Box>

        <Image src={image} alt="image"></Image>

        <Text fontWeight={500}>Ready? Lets do this!</Text>
        <Button size="lg" colorScheme="purple">
          {ctaText}
        </Button>
      </VStack>
    </Center>
  );
};

export async function getServerSideProps({ params }: any) {
  const { site, slug } = params;

  const site1 = await getSite(site);
  const page = await getAllPages(site, slug);

  return {
    props: page?.data,
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { site: "123", slug: "page1" } }],
//     fallback: true,
//   };
// }

export default Site;
