import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { OrderCall } from "@/components/OrderCall/OrderCall";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {}
export const PromoSectionGeneralPage: FC<Props> = () => {
  return (
    <div className={classNames(styles.sectionWrapperPromo)}>
      <div className={classNames(montserrat.className, styles.setcionPromo)}>
        <div className={classNames(styles.setcionPromoTitle)}>
          Чистка и ремонт скважин в Москве и Московской области
        </div>
        <div className={classNames(styles.sectionPromoSubTitle)}>
          Оставьте заявку, и наш менеджер ответит на вопросы, подскажет по
          набору услуг и рассчитает стоимость уборки
        </div>
        <OrderCall />
      </div>
    </div>
  );
};
