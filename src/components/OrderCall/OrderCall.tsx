import { FC } from "react";
import { Box } from "@mui/system";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";

interface Props {}
export const OrderCall: FC<Props> = () => {
  return (
    <Box display={"flex"} alignItems={"center"} mt={3}>
      <Box mr={2}>
        <Input
          onChange={(e) => console.log(e.target.value)}
          placeholder={"+7 (___) ___-____"}
          type={"number"}
          sx={{
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              {
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
