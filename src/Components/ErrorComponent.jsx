import { Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <>
      <Container
        maxW={"container.lg"}
        h={"10vh"}
        bgColor={"red.300"}
        mt={"18%"}
        alignSelf={"Center"}
        align={"center"}
      >
        <Heading p={4}>{message}</Heading>
      </Container>
    </>
  );
};

export default ErrorComponent;
