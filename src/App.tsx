import { Box, Input, Text, Button, ChakraProvider } from "@chakra-ui/react";
import { useRef, useState } from "react";
import useArray from "./hooks/useArray";
import Form from "./pages";

function App() {
  const [num, setNum] = useState<number>(0);
  const ref = useRef<HTMLInputElement>(null);
  const { array, remove, filter, push } = useArray([
    123, 1234, 3, 64, 12, 7, 46, 85,
  ]);

  return (
    <ChakraProvider>
      <Box>
        <Text>{JSON.stringify(array)}</Text>
        <Input
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
          type="number"
        />
        <Input type="string" ref={ref} />
        <Button onClick={() => (num ? push(num) : "")}>PUSH</Button>
        <Button onClick={() => (num ? remove(Number(num) - 1) : "")}>
          REMOVE
        </Button>
        <Button onClick={() => (num ? filter((item) => item > 20) : "")}>
          Filter
        </Button>
      </Box>
      <Form />
    </ChakraProvider>
  );
}

export default App;
