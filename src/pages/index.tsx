import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import { postCreateVaTopup } from "../network/lib";
import { CreateVaTopBodyProps, PayType } from "../global/types";

interface Props {}

const Index: React.FC<Props> = () => {
  const [payType, setPayType] = useState<PayType>("briva");
  useEffect(() => {
    const body: CreateVaTopBodyProps = { amount: "", pay_type: "briva" };
    postCreateVaTopup(body);
  }, []);
  return (
    <Box>
      <button
        onClick={() => setPayType((b) => (b === "briva" ? "bni" : "briva"))}
      >
        {payType}
      </button>
    </Box>
  );
};

export default Index;
