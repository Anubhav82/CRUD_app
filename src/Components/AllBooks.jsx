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
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAllBooks = async () => {
    try {
      const data = await axios.get("http://localhost:4000/Books");
      setBooks(data.data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, [books]);

  const addToFavourite = async (id) => {
    const fav = books.filter((book) => book.id === id);
    const favBook = Object.assign({}, fav[0]);
    await axios.post("http://localhost:4000/Favourites", favBook);
  };

  const handleRemove = async (id) => {
    await axios.delete(`http://localhost:4000/Books/${id}`);
    await axios.delete(`http://localhost:4000/Favourites/${id}`);
    // const filteredBooks = books.filter((book) => book.id !== id);
    // setBooks(filteredBooks);
    getAllBooks();
  };

  if (error) {
    return <ErrorComponent message={" ! Error while fetching Data"} />;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box alignItems={"center"} scrollBehavior={"smooth"}>
          <TableContainer
            position={"absolute"}
            w={"90%"}
            shadow={"dark-lg"}
            ml={"24"}
            mt={"40"}
            p={5}
            mb={"20"}
            h={"80vh"}
            overflowY={"auto"}
          >
            <Table size="lg">
              <Thead bgColor={"black"}>
                <Tr
                  textTransform={"uppercase"}
                  fontSize={"3xl"}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  <Td>Sr.</Td>
                  <Td>Name</Td>
                  <Td>Artist</Td>
                  <Td>Avaliability</Td>
                  <Td>Price</Td>
                  <Td textAlign={"center"}>Actions</Td>
                </Tr>
              </Thead>
              <Tbody bgColor={"white"}>
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
                          m={3}
                          variant={"outline"}
                          colorScheme={"green"}
                          onClick={() => addToFavourite(book.id)}
                        >
                          Add to Favourite
                        </Button>

                        <Link to={`/edit/${book.id}`}>
                          <Button m={3} colorScheme={"facebook"}>
                            Edit
                          </Button>
                        </Link>

                        <Button
                          m={3}
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
          <Image src={Background} w={"full"} h={"130vh"} />
        </Box>
      )}
    </>
  );
};

export default AllBooks;
