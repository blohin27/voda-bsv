import { FC, PropsWithChildren, ReactNode } from "react";
import "../app/globals.css";
import "@fontsource/inter";

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return <div>{children}</div>;
}
