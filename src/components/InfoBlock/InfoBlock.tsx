import { FC } from "react";
import styles from "./styles.module.scss";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { Montserrat } from "next/font/google";
import classNames from "classnames";
const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {}
export const InfoBlocks: FC<Props> = () => {
  return (
    <div style={{ position: "relative", width: "100%", display: "flex" }}>
      <div style={{ position: "absolute" }} className={styles.sectionWrapper}>
        <div className={styles.section}>
          <div className={styles.infoItem}>
            <div id={"icon"} style={{ display: "flex", alignItems: "stretch" }}>
              <AddBusinessIcon
                style={{ fontSize: "120px", color: "#fe6c36" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  className={classNames(
                    montserrat.className,
                    styles.setcionPromoTitle,
                  )}
                >
                  9+ лет
                </div>
                <div className={classNames(styles.sectionPromoSubTitle)}>
                  Эффективной работы в сфере водоснабжения
                </div>
              </div>
            </div>
            <div id={"icon"} style={{ display: "flex", alignItems: "stretch" }}>
              <GppGoodIcon style={{ fontSize: "120px", color: "#fe6c36" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  className={classNames(
                    montserrat.className,
                    styles.setcionPromoTitle,
                  )}
                >
                  9+ лет
                </div>
                <div className={classNames(styles.sectionPromoSubTitle)}>
                  Эффективной работы в сфере водоснабжения
                </div>
              </div>
            </div>
            <div id={"icon"} style={{ display: "flex", alignItems: "stretch" }}>
              <GppGoodIcon style={{ fontSize: "120px", color: "#fe6c36" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  className={classNames(
                    montserrat.className,
                    styles.setcionPromoTitle,
                  )}
                >
                  9+ лет
                </div>
                <div className={classNames(styles.sectionPromoSubTitle)}>
                  Эффективной работы в сфере водоснабжения
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
