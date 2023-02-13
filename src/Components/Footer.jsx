import { Box, HStack, VStack, Heading, Text, Avatar } from "@chakra-ui/react";
import React from "react";
import img2 from "../Assests/img2.jpg";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"28"}>
      <HStack justifyContent={"space-between"} p={"4"}>
        <VStack
          alignItems={"flex-start"}
          borderRight={"2px"}
          p={"4"}
          w={"full"}
          color={"whiteAlpha.900"}
        >
          <Heading>About Us</Heading>
          <Text>
            CRUD Application - In which you can apply curd operations.
          </Text>
        </VStack>
        <VStack p={"4"} w={"full"} color={"whiteAlpha.900"}>
          <Avatar boxSize={"20"} src={img2} />
          <Text>Created by </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;
