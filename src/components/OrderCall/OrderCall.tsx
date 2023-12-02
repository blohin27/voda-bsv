import { FC } from "react";
import { Box } from "@mui/material";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import { ClassesSx } from "@/theme/theme";

interface Props {}
export const OrderCall: FC<Props> = () => {
  return (
    <Box sx={classes.root} display={"flex"} alignItems={"center"}>
      <Box sx={classes.wrapperInput}>
        <Box sx={classes.input} mr={1}>
          <Input
            onChange={(e) => console.log(e.target.value)}
            placeholder={"+7 "}
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
          <Button
            sx={classes.button}
            variant="contained"
            style={{ backgroundColor: "#ff6c36" }}
          >
            Заказать звонок
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {
    "@media (max-width:800px)": {
      justifyContent: "center",
    },
  },
  wrapperInput: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "5px",
    borderRadius: "5px",
    "@media (max-width:400px)": {
      flexDirection: "column",
    },
  },
  button: {},
  input: {},
};
