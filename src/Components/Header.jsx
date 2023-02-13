import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box
        w={"full"}
        h={"20"}
        bgColor={"blackAlpha.900"}
        position={"sticky"}
        shadow={"lg"}
      >
        <HStack
          color={"whiteAlpha.900"}
          fontWeight={"medium"}
          p={"5"}
          fontFamily={"heading"}
          fontSize={"xl"}
          spacing={20}
          justifyContent={"center"}
        >
          <Link to="/">Home</Link>
          <Link to="/all_books">All Manga</Link>
          <Link to="/add_book">Add Manga</Link>
          <Link to="/favourite">Favourites</Link>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
