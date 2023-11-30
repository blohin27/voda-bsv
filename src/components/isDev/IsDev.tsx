import { FC, PropsWithChildren } from "react";
import { DEV } from "@/const";

interface Props {}

export const IsDev: FC<PropsWithChildren<Props>> = ({ children }) => {
  if (DEV) {
    return (
      <div style={{ textAlign: "center", fontSize: "60px" }}>
        Сайт в разработке
      </div>
    );
  }
  return <>{children}</>;
};
