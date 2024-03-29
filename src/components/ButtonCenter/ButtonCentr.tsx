import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { sendContactForm } from "@/lib/api";
import { toast } from "react-toastify";

interface IProps {
  title: string;
}
export const ButtonCentr: FC<IProps> = ({ title }) => {
  const change = async () => {};
  return (
    <Box
      sx={classes.root}
      onClick={() => {
        change();
      }}
      mt={4}
      mb={9}
    >
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>{title}</Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { display: "flex", justifyContent: "center" },
  content: {
    display: "flex",
    padding: "10px 15px 10px 15px",
    color: "white",
    fontWeight: "700",
    fontSize: "20px",
    backgroundColor: "#fd6c36",
    borderRadius: "5px",
    "@media (max-width:400px)": {
      fontSize: "15px",
    },
  },
};
