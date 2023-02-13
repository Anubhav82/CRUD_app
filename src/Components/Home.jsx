import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import img1 from "../Assests/Home.png";

const Home = () => {
  return (
    <>
      <Box>
        <Heading size={"2xl"} position={"absolute"} mt={"15%"} ml={"10"}>
          Welcome to my App
        </Heading>

        <Image src={img1} h={"120vh"} w={"full"}></Image>
      </Box>
    </>
  );
};

export default Home;
