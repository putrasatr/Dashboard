import { Image, ChakraProvider } from "@chakra-ui/react";
import BackGround from "./global/img/wp.jpeg";

function App() {
  return (
    <ChakraProvider>
      <Image src={BackGround} alt="" h="100vh" w="100%" />
    </ChakraProvider>
  );
}

export default App;
