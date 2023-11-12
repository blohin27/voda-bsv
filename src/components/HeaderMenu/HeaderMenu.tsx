import { FC } from "react";
import styles from "./styles.module.scss";
import { SimpleSlider } from "@/components/SimpleSlider/SimpleSlider";
import { Roboto_Slab } from "next/font/google";
import classNames from "classnames";
import {Box} from "@mui/system";
const roboto = Roboto_Slab({ subsets: ["latin"] });

interface IProps {}

export const HeaderMenu: FC<IProps> = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.section} >
        <div className={classNames(roboto.className, styles.link)}>Услуги</div>
        <div className={styles.link}>Цены</div>
        <div className={styles.link}>Срочный выезд</div>
        <div className={styles.link}>Калькулятор</div>
        <div className={styles.link}>Наши работы</div>
        <div className={styles.link}>Наши работы</div>
        <div className={styles.link}>Полезные статьи</div>
        <div className={styles.link}>Контакты</div>
        </div>
      </div>
      {/*<SimpleSlider />*/}
    </>
  );
};
