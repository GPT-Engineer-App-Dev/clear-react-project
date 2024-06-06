import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.200" p={4} borderRadius="md" mb={6} justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Box>
          <Text as="a" href="#" mx={2}>Home</Text>
          <Text as="a" href="#" mx={2}>About</Text>
          <Text as="a" href="#" mx={2}>Contact</Text>
        </Box>
      </Flex>
      <VStack spacing={4} align="center">
        <Text fontSize="2xl">Welcome to MyApp</Text>
        <Text>This is your starting point. Begin building your application here.</Text>
      </VStack>
    </Container>
  );
};

export default Index;