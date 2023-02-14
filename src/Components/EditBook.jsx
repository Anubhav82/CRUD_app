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
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [book, setBook] = useState({
    name: "",
    artist: "",
    avaliability: "",
    price: "",
  });

  useEffect(() => {
    const getBook = async () => {
      const book = await axios.get(`http://localhost:4000/Books/${id}`);
      setBook(book.data);
    };
    getBook();
  }, [id]);

  const onValueChange = (e) => {
    console.log(e.target.value);
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const updateBook = async () => {
    await axios.put(`http://localhost:4000/Books/${id}`, book);
    navigate("/all_books");
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
                  value={book.name}
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
                  value={book.artist}
                  onChange={onValueChange}
                ></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Avaliability</FormLabel>
                <Select
                  name="avaliability"
                  value={book.avaliability}
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
                  value={book.price}
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
                  onClick={() => updateBook()}
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

export default EditBook;
