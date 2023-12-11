import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";

interface IProps {}
export const Template: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}></Box>;
      </Box>
      ;
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: {},
  content: {},
};
