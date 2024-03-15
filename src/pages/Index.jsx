import React from "react";
import { Box, Heading, Text, Image, Flex, Link, Button, Stack, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1",
      image: "https://images.unsplash.com/photo-1667709525632-ca0ce065951d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMSUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzEwNDc3OTQ1fDA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "https://project1.com",
    },
    {
      title: "Project 2",
      description: "A brief description of project 2",
      image: "https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMiUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzEwNDc3OTQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "https://project2.com",
    },
    // Add more projects as needed
  ];

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Flex align="center" justify="space-between" mb={8}>
        <Heading as="h1" size="xl">
          Your Name
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link href="https://github.com/yourusername" isExternal>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" isExternal>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
          <Link href="mailto:your@email.com" isExternal>
            <Icon as={FaEnvelope} boxSize={6} />
          </Link>
        </Stack>
      </Flex>

      <Box mb={8}>
        <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTAzOTgwOTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Your Name" borderRadius="full" boxSize="200px" objectFit="cover" mx="auto" />
        <Text fontSize="xl" textAlign="center" mt={4}>
          A brief introduction about yourself and your expertise.
        </Text>
      </Box>

      <Heading as="h2" size="lg" mb={4}>
        Projects
      </Heading>
      <Stack spacing={8}>
        {projects.map((project, index) => (
          <Box key={index} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={project.image} alt={project.title} mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {project.title}
            </Heading>
            <Text mb={4}>{project.description}</Text>
            <Link href={project.link} isExternal>
              <Button colorScheme="blue">View Project</Button>
            </Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Index;
