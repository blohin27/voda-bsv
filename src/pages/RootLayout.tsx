import { FC, PropsWithChildren, ReactNode } from "react";
import "../app/globals.css";
import "@fontsource/inter";
import { Box } from "@mui/material";
import { COLOR_BLACK } from "@/const";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <Box sx={{ color: COLOR_BLACK }}>
      {children}
      <ToastContainer position="top-center" style={{ fontSize: "25px" }} autoClose={2000} />
    </Box>
  );
}
