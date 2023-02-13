import {
  Box,
  Button,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import Background from "../Assests/Background.jpg";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const addBooks = async () => {
      try {
        const data = await axios.get("http://localhost:4000/Books");
        setBooks(data.data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };
    addBooks();
  }, []);

  const addToFavourite = async (id) => {
    const fav = books.filter((book) => book.id === id);
    const favBook = Object.assign({}, fav[0]);
    await axios.post("http://localhost:4000/Favourites", favBook);
  };

  const handleRemove = async (id) => {
    await axios.delete(`http://localhost:4000/Books/${id}`);
    const filteredBooks = books.filter((book) => book.id !== id);
    await axios.delete(`http://localhost:4000/Favourites/${id}`);
    setBooks(filteredBooks);
  };

  if (error) {
    return <ErrorComponent message={" ! Error while fetching Data"} />;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          <TableContainer
            position={"absolute"}
            w={"80%"}
            shadow={"dark-lg"}
            mt={"40"}
            ml={"48"}
            p={5}
            mb={"20"}
            bgColor={"whiteAlpha.900"}
            zIndex={0}
          >
            <Table size="lg">
              <Thead>
                <Tr
                  textTransform={"uppercase"}
                  fontSize={"3xl"}
                  fontWeight={"bold"}
                  color={"gray.700"}
                >
                  <Td>Sr.</Td>
                  <Td>Name</Td>
                  <Td>Artist</Td>
                  <Td>Avaliability</Td>
                  <Td>Price</Td>
                </Tr>
              </Thead>
              <Tbody>
                {books.map((book, index) => {
                  return (
                    <Tr fontSize={"xl"} key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{book.name}</Td>
                      <Td>{book.artist}</Td>
                      <Td>{book.avaliability}</Td>
                      <Td>Rs.{book.price}</Td>
                      <Td>
                        <Button
                          variant={"outline"}
                          colorScheme={"green"}
                          onClick={() => addToFavourite(book.id)}
                        >
                          Add to Favourite
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          colorScheme={"red"}
                          onClick={() => handleRemove(book.id)}
                        >
                          Remove
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <Image src={Background} w={"full"} h={"100vh"} />
        </Box>
      )}
    </>
  );
};

export default AllBooks;
