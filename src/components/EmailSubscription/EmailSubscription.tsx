import { FC, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { OtherHouses } from "@mui/icons-material";
import { OrderCall } from "@/components/OrderCall/OrderCall";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface IProps {}
export const EmailSbscribtion: FC<IProps> = () => {
  const [mob, setMob] = useState<string>("");

  const validateNumber = (value: number | string) => {
    const regex = /^\d{1,13}$/;
    const val = value.toString();
    setMob(val);
  };
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box display={"flex"} sx={classes.title}>
            Узнавай о лучших преложениях и новинках раньше остальных
          </Box>
          <Box
            sx={{
              gap: "10px",
              display: "flex",
              "@media (max-width:380px)": {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box sx={classes.input}>
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  size={"small"}
                  sx={{ width: "180px", height: "35px" }}
                  value={mob}
                  onChange={(e) => {
                    validateNumber(e.target.value);
                  }}
                />
              </Box>
            </Box>
            <Box display={"flex"}>
              <Button sx={classes.button} variant="contained">
                Подписаться
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: { backgroundColor: "#292523" },
  wrapper: { maxWidth: "800px", margin: "0 auto" },
  title: {
    color: "white",
    "@media (max-width:670px)": {
      textAlign: "center",
    },
  },
  content: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 0 40px 0px",
    alignItems: "center",
    margin: "0 16px 0 16px",
    "@media (max-width:670px)": {
      flexDirection: "column",
      gap: "10px",
    },
  },
  button: {
    backgroundColor: "#ff6c36",
    width: "100%",
  },
  input: { backgroundColor: "white", display: "flex", borderRadius: "5px" },
};
