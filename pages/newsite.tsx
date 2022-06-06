import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Center,
  VStack,
  Flex,
  Box,
  Select,
  Heading,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

// https://stackblitz.com/edit/react-hook-form-typescript-rmjsuw?file=App.tsx
// https://react-hook-form.com/advanced-usage#AccessibilityA11y

type LoginFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginForm = () => {
  const router = useRouter();
  const { status } = useSession();

  return (
    <Box style={{ width: 350 }}>
      <VStack spacing={4} align="flex-start">
        <Heading>Create a new site</Heading>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="My Awesome Site 1" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Template</FormLabel>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>

        <Button>Create Site</Button>
      </VStack>
    </Box>
  );
};

const Home = () => {
  return (
    <Flex justify="center" h="100vh" w="100vw" align="center">
      <Center w="100%">
        <LoginForm />
      </Center>
    </Flex>
  );
};

export default Home;
