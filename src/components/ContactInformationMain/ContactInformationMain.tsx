import { FC } from "react";

import { ClassesSx } from "@/theme/theme";
import { Box, useMediaQuery } from "@mui/material";
import { EMAIL, MOBILE_TELEPHONE } from "@/const";

interface IProps {}

export const ContactInformationMain: FC<IProps> = ({}) => {
  const matches = useMediaQuery("(max-width:850px)");
  return (
    <Box sx={classes.tel_mob}>
      <Box>
        <Box>
          <Box sx={classes.tel_one}>{`${MOBILE_TELEPHONE}`}</Box>
        </Box>
        <Box sx={classes.tel_two}>{`${EMAIL}`}</Box>
      </Box>
      {!matches && (
        <Box style={{ textAlign: "center" }} ml={1}>
          <span style={{ fontWeight: "900", color: "black" }}>
            Режим работы
          </span>
          <br /> ежедневно <br /> с 07:00 до 21:00
        </Box>
      )}
    </Box>
  );
};

const classes: ClassesSx = {
  tel_mob: {
    display: "flex",
    color: "rgba(92, 92, 92)",
    alignItems: "center",
    fontFamily: "Montserrat', sans-serif",
  },
  tel_one: {
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center",
    color: "#352c1d",
    "@media (max-width: 200px)": {
      fontSize: "16px",
    },
  },
  tel_two: {
    fontSize: "20px",
    textAlign: "center",
    letterSpacing: "1px",
    "@media (max-width: 200px)": {
      fontSize: "12px",
    },
  },
};
