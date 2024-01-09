import { Box } from "@mui/material";
import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";

interface IProps {}

export const LineBorder: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}></Box>;
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: {},
  content: {
    height: "2px",
    backgroundColor: "#09a4eb",
    width: "100%",
    // background: -webkit-linear-gradient(90deg, rgb(255, 255, 255) 24%, #09a4eb 48%, rgb(255, 255, 255) 76%);
    // background: -moz-linear-gradient(90deg, rgb(255, 255, 255) 24%, #09a4eb 48%, rgb(255, 255, 255) 76%);
    // background: linear-gradient(90deg, rgb(255, 255, 255) 24%, #09a4eb 48%, rgb(255, 255, 255) 76%);
    background: "linear-gradient(90deg, rgb(255, 255, 255) 24%, #09a4eb 48%, rgb(255, 255, 255) 76%);",
  },
};
