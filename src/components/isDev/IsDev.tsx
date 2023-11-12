import { FC } from "react";

interface Props {}

export const IsDev: FC<Props> = () => {
  return (
    <div style={{ textAlign: "center", fontStyle: "60px" }}>
      Сайт в разработке
    </div>
  );
};
