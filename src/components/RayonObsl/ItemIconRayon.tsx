import React, { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import Image from "next/image";

interface IProps {
  src: string;
}
export const ItemIconRayon: FC<IProps> = ({ src }) => {
  return <Image src={src} alt={"image"} width={30} height={30} objectFit="cover" objectPosition="center center" quality={100} />;
};

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px" },
};
