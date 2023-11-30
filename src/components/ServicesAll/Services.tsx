import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Montserrat } from "next/font/google";
import { ServiceItem } from "@/components/ServicesAll/component/ServiceItem/ServiceItem";
const montserrat = Montserrat({ subsets: ["latin"] });

interface IProps {}
export const ServicesAll: FC<IProps> = () => {
  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.title, montserrat.className)}>
        Основные услуги по водоснабжению
      </div>
      <div id={"tab"} style={{}}>
        <div>Все услуги</div>
        <div>Для физ. лиц</div>
        <div>Для юр. лиц</div>
        <div>аша</div>
        <div>аша</div>
        <div>аша</div>
      </div>
      <div className={classNames(styles.content)}>
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
    </div>
  );
};
