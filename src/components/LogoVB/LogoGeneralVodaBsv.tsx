import { FC } from "react";
import styles from "./styles.module.css";

interface IProps {}

export const LogoGeneralVodaBsv: FC<IProps> = () => {
  return (
    <div className={styles.menu_logo}>
      <div className={styles.img_logo}></div>
      <div className={styles.text_logo}>
        <div>voda-bsv.ru</div>
        <div className={styles.text_deviz}>вода в каждый дом</div>
      </div>
    </div>
  );
};
