import { FC } from "react";
import { EMAIL, MOBILE_TELEPHONE } from "@/const";
import styles from "./styles.module.css";
import { Box } from "@mui/system";

interface IProps {}

export const ContactInformationMain: FC<IProps> = ({}) => {
  return (
    <div className={styles.tel_mob}>
      <Box mr={1}>
        <div>
          <div className={styles.tel_one}>{`${MOBILE_TELEPHONE}`}</div>
        </div>

        <div className={styles.tel_two}>{`${EMAIL}`}</div>
      </Box>
      <Box style={{ textAlign: "center" }} ml={1}>
        <span style={{ fontWeight: "900", color: "black" }}> Режим работы</span>{" "}
        <br /> ежедневно <br /> с 07:00 до 21:00
      </Box>
    </div>
  );
};
