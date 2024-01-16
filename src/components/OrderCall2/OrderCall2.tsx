import { FC } from "react";
import { Box } from "@mui/system";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";

interface Props {}
export const OrderCall2: FC<Props> = () => {
  return (
    <Box display={"flex"} alignItems={"center"} mt={3}>
      <Box mr={2} style={{ backgroundColor: "white", borderRadius: "5px" }}>
        <Input
          style={{ padding: "0 5px 0 5px" }}
          placeholder={"+7 (___) ___-____"}
          type={"number"}
          sx={{
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
              "-webkit-appearance": "none",
              margin: 0,
            },
            "& input[type=number]": {
              "-moz-appearance": "textfield",
            },
          }}
        />
      </Box>
      <Box>
        <Button variant="contained" style={{ backgroundColor: "#ff6c36" }}>
          Заказать звонок
        </Button>
      </Box>
    </Box>
  );
};
