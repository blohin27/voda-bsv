import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { montserrat } from "../header/HeaderSite/HeaderSite";
import { CSSProperties } from "@mui/system/CSSProperties";

interface IProps {
  title: string;
  title2?: string;
  options?: { color?: string };
}
export const TitleComponent: FC<IProps> = ({ title, title2, options }) => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content} color={`${options?.color}`} className={montserrat.className}>
          {title}
        </Box>
        {title2 && (
          <Box sx={classes.content} className={montserrat.className}>
            {title2}
          </Box>
        )}
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { display: "flex", justifyContent: "center", flexDirection: "column" },
  content: {
    display: "flex",
    fontSize: "35px",
    fontWeight: "700",
    textAlign: "center",
    justifyContent: "center",
    "@media (max-width:400px)": {
      fontSize: "15px",
    },
  },
};
