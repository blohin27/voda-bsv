import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { COLOR_ORANGE } from "@/const";
import { FcFlashOn } from "react-icons/fc";
import { useMediaQuery } from "@mui/material";

interface IProps {
  text: string;
}
export const Slogan: FC<IProps> = ({ text }) => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box>
            <FcFlashOn size={matches ? 50 : 100} />
          </Box>
          <Box sx={classes.text}>{text} </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: {
    margin: "40px 16px 40px 16px",
    padding: "20px",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    borderLeft: `10px solid ${COLOR_ORANGE}`,
    display: "flex",
    alignItems: "center",
    "@media (max-width:800px)": {
      margin: "30px 16px 30px 16px",
    },
  },
  text: {
    fontSize: "30px",
    fontWeight: "700",
    "@media (max-width:800px)": {
      justifyContent: "space-around",
      fontSize: "26px",
    },
    "@media (max-width:600px)": {
      justifyContent: "space-around",
      fontSize: "22px",
    },
    "@media (max-width:450px)": {
      justifyContent: "space-around",
      fontSize: "18px",
    },
  },
};
