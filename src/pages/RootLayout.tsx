import { FC, PropsWithChildren, ReactNode } from "react";
import "../app/globals.css";
import "@fontsource/inter";
import { Box } from "@mui/material";
import { COLOR_BLACK } from "@/const";

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return <Box sx={{ color: COLOR_BLACK }}>{children}</Box>;
}
