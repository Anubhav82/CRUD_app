import { Box, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack justifyContent={"center"} h={"90vh"}>
      <Spinner size={"xl"} />
    </VStack>
  );
};

export default Loader;
