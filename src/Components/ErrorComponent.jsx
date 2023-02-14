import { Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import error from "../Assests/Error.png";

const ErrorComponent = ({ message }) => {
  return (
    <Stack
      h={"100vh"}
      w={"full"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack textAlign={"center"} border={"2px"}>
        <Image src={error} w={"600px"} h={"400px"} />
        <Heading p={10} color={"red"}>
          {message}
        </Heading>
      </Stack>
    </Stack>
  );
};

export default ErrorComponent;
