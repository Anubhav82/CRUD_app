import {
  Button,
  Container,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const AddBooks = () => {
  const [newBook, setNewBook] = useState({
    name: "",
    artist: "",
    avaliability: "",
    price: "",
  });

  const onValueChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewBook({ ...newBook, [name]: value });
  };

  const addPlayer = async () => {
    if (
      newBook.name &&
      newBook.avaliability &&
      newBook.artist &&
      newBook.price
    ) {
      await axios.post("http://localhost:4000/Books", newBook);
      setNewBook({
        name: "",
        artist: "",
        avaliability: "",
        price: "",
      });
    } else {
      alert("please add all details");
    }
  };

  return (
    <>
      <VStack>
        <Container
          maxW={"container.md"}
          mt={"32"}
          shadow={"dark-lg"}
          p={"5"}
          borderRadius={"xl"}
          position={"absolute"}
          bgColor={"whiteAlpha.900"}
        >
          <Heading mb={6}>Add Manga</Heading>
          <SimpleGrid columns={2} columnGap={3} rowGap={2}>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Name of book"
                  type={"text"}
                  name="name"
                  value={newBook.name}
                  onChange={onValueChange}
                ></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Artist</FormLabel>
                <Input
                  type={"text"}
                  placeholder="Name of Artist"
                  name="artist"
                  value={newBook.artist}
                  onChange={onValueChange}
                ></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Avaliability</FormLabel>
                <Select
                  name="avaliability"
                  value={newBook.avaliability}
                  onChange={onValueChange}
                >
                  <option>Select...</option>
                  <option>Yes</option>
                  <option>No</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  type={"number"}
                  name="price"
                  placeholder="$"
                  value={newBook.price}
                  onChange={onValueChange}
                ></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <Button
                  w={"full"}
                  colorScheme={"green"}
                  mt={5}
                  onClick={() => addPlayer()}
                >
                  Add Book
                </Button>
              </FormControl>
            </GridItem>
          </SimpleGrid>
        </Container>

        <Image
          src="https://i0.wp.com/omnigeekempire.com/wp-content/uploads/2018/03/utp5ljz.png?fit=1920%2C1080&ssl=1"
          w={"full"}
          h={"100vh"}
        />
      </VStack>
    </>
  );
};

export default AddBooks;
