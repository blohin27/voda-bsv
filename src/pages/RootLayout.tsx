import { FC, PropsWithChildren, ReactNode } from "react";
import "../app/globals.css";

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return <div>{children}</div>;
}
