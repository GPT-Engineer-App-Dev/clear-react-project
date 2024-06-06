import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Box>
          <Text as="a" href="#" mx={2}>Home</Text>
          <Text as="a" href="#" mx={2}>About</Text>
          <Text as="a" href="#" mx={2}>Contact</Text>
        </Box>
      </Flex>
      <Flex direction="column" align="center" justify="center" height="calc(100vh - 64px)">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;