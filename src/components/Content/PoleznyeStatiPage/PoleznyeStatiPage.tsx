import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";
import { COLOR_MILK, COLOR_ORANGE } from "@/const";
import { PoleznyeStatiItem } from "@/components/Content/PoleznyeStatiPage/PoleznyeStatiItem";
import Link from "next/link";

interface IProps {}
export const PoleznyeStatiPage: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.titlePage}>Полезные статьи</Box>
          <Box sx={classes.sectionItems}>
            <PoleznyeStatiItem photo={"/photo/1t.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
            <PoleznyeStatiItem photo={"/photo/2t.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
            <PoleznyeStatiItem photo={"/photo/5t.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
            <PoleznyeStatiItem photo={"/photoNew/testImage.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
            <PoleznyeStatiItem photo={"/photoNew/testImage.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
            <PoleznyeStatiItem photo={"/photoNew/testImage.jpg"} title={"Как чистить скважину правильно?"} link={"/"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: { backgroundColor: "#ededed" },
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px" },
  titlePage: { fontWeight: "700", fontSize: "40px", textAlign: "center" },
  sectionItems: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px 20px" },
};
