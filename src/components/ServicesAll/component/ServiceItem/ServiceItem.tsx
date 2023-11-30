import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

interface IProps {}
export const ServiceItem: FC<IProps> = () => {
  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.content)}></div>
    </div>
  );
};
