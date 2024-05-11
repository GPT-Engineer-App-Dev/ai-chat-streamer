import React, { useState } from "react";
import { Container, VStack, Input, Button, Box, Text, HStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Simulate sending a message
  const sendMessage = () => {
    if (!inputValue.trim()) return;
    const newMessage = { id: messages.length + 1, text: inputValue, sender: "user" };
    setMessages([...messages, newMessage]);

    // Simulate receiving a response
    setTimeout(() => {
      const response = { id: messages.length + 2, text: `Response to "${inputValue}"`, sender: "bot" };
      setMessages((prev) => [...prev, response]);
    }, 1000);

    setInputValue("");
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} align="stretch">
        <Box height="500px" overflowY="scroll" p={4} border="1px" borderColor="gray.200">
          {messages.map((message) => (
            <Box key={message.id} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}>
              <Text fontSize="md" p={2} bg={message.sender === "user" ? "blue.100" : "green.100"} borderRadius="lg">
                {message.text}
              </Text>
            </Box>
          ))}
        </Box>
        <HStack>
          <Input placeholder="Type a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && sendMessage()} />
          <Button onClick={sendMessage} colorScheme="blue" rightIcon={<FaPaperPlane />}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
