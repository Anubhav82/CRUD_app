import {
  Button,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Favourite = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const addBooks = async () => {
      const data = await axios.get("http://localhost:4000/Favourites");
      setBooks(data.data);
    };
    addBooks();
  }, []);

  const handleRemove = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:4000/Favourites/${id}`);
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  return (
    <>
      <VStack>
        <TableContainer
          w={"80%"}
          mt={"40"}
          p={5}
          position={"absolute"}
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
                <Td>Action</Td>
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
                    <Td>{book.price}</Td>
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
        <Image
          src="https://i0.wp.com/omnigeekempire.com/wp-content/uploads/2018/03/utp5ljz.png?fit=1920%2C1080&ssl=1"
          w={"full"}
          h={"100vh"}
        />
      </VStack>
    </>
  );
};

export default Favourite;
