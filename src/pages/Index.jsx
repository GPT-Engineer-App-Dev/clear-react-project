import { Container, Text, VStack, Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">My Website</Text>
        </Box>
        <Spacer />
        <Box>
          <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaHome />}>Home</Button>
          <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaInfoCircle />}>About</Button>
          <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaPhone />}>Contact</Button>
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is a basic structure of a React app with Chakra UI.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;