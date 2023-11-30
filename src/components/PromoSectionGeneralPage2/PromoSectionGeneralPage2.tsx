import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { OrderCall } from "@/components/OrderCall/OrderCall";
import { Montserrat } from "next/font/google";
import { OrderCall2 } from "@/components/OrderCall2/OrderCall2";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {}
export const PromoSectionGeneralPage2: FC<Props> = () => {
  return (
    <div className={classNames(styles.sectionWrapperPromo)}>
      <div className={classNames(montserrat.className, styles.setcionPromo)}>
        <div className={classNames(styles.setcionPromoTitle)}>
          Пригласить специалиста для расчета
        </div>
        <div className={classNames(styles.sectionPromoSubTitle)}>
          Сэкономить время на поиск информации просто! Пригласите на оценку
          объекта специалиста.
        </div>
        <OrderCall2 />
        <div className={classNames(styles.flexContainer)}>
          <div className={classNames(styles.itemWrapper)}>
            <div className={classNames(styles.iconContainer)}>
              <TimelapseIcon className={classNames(styles.icon)} />
            </div>
            <div className={classNames(styles.textContainer)}>
              Срочный выезд 1-2 часа
            </div>
          </div>
          <div
            className={classNames(styles.itemWrapper, styles.itemWrapperCenter)}
          >
            <div className={classNames(styles.iconContainer)}>
              <AccountBalanceWalletIcon className={classNames(styles.icon)} />
            </div>
            <div className={classNames(styles.textContainer)}>
              Бесплатная профессиональная консультация
            </div>
          </div>
          <div className={classNames(styles.itemWrapper)}>
            <div className={classNames(styles.iconContainer)}>
              <TimelapseIcon className={classNames(styles.icon)} />
            </div>
            <div className={classNames(styles.textContainer)}>
              Срочный выезд 1-2 часа
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
