import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";

interface IProps {}

export const OurAdvantages: FC<IProps> = () => {
  return (
    <Box sx={classes.root}>
      <TitleComponent title={"Что мы можем предложить?"} title2={"Наши услуги:"}></TitleComponent>
      <Box sx={classes.wrapperAdv}>
        <Box sx={classes.sectionForItems}>
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <AddBusinessIcon style={{ fontSize: "80px", color: "#fe6c36" }} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Ремонт и чистка в подарок!</Box>
              <Box sx={classes.itemTextDescr}>
                Мы не предлагаем своим заказчикам оплатить услугу на условиях предоплаты. Не навязываем заказчику дополнительных работ и дополнительных услуг.
              </Box>
            </Box>
          </Box>
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <AddBusinessIcon style={{ fontSize: "80px", color: "#fe6c36" }} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Ремонт и чистка в подарок!</Box>
              <Box sx={classes.itemTextDescr}>
                Мы не предлагаем своим заказчикам оплатить услугу на условиях предоплаты. Не навязываем заказчику дополнительных работ и дополнительных услуг.
              </Box>
            </Box>
          </Box>
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <AddBusinessIcon style={{ fontSize: "80px", color: "#fe6c36" }} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Ремонт и чистка в подарок!</Box>
              <Box sx={classes.itemTextDescr}>
                Мы не предлагаем своим заказчикам оплатить услугу на условиях предоплаты. Не навязываем заказчику дополнительных работ и дополнительных услуг.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={classes.sectionForItems}>
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <AddBusinessIcon style={{ fontSize: "80px", color: "#fe6c36" }} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Ремонт и чистка в подарок!</Box>
              <Box sx={classes.itemTextDescr}>
                Мы не предлагаем своим заказчикам оплатить услугу на условиях предоплаты. Не навязываем заказчику дополнительных работ и дополнительных услуг.
              </Box>
            </Box>
          </Box>
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <AddBusinessIcon style={{ fontSize: "80px", color: "#fe6c36" }} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Ремонт и чистка в подарок!</Box>
              <Box sx={classes.itemTextDescr}>
                Мы не предлагаем своим заказчикам оплатить услугу на условиях предоплаты. Не навязываем заказчику дополнительных работ и дополнительных услуг.
              </Box>
            </Box>
          </Box>
          <Box sx={classes.item}>
            <Box sx={classes.itemImage}>
              <AddBusinessIcon style={{ fontSize: "80px", color: "#fe6c36" }} />
            </Box>
            <Box sx={classes.itemText}>
              <Box sx={classes.itemTextTitle}>Ремонт и чистка в подарок!</Box>
              <Box sx={classes.itemTextDescr}>
                Мы не предлагаем своим заказчикам оплатить услугу на условиях предоплаты. Не навязываем заказчику дополнительных работ и дополнительных услуг.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  titleRoot: {
    color: "#362c1d",
    fontSize: "40px",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: "1xp",
    "@media (max-width:600px)": {
      fontSize: "30px",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "50px",
    "@media (max-width:600px)": {
      marginTop: "35px",
    },
    "@media (max-width:400px)": {
      gap: "10px",
    },
  },
  itemText: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
  },
  itemTextTitle: {
    сolor: "#362c1d",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "15px",
  },
  itemTextDescr: {
    lineHeight: "25px",
    сolor: "#362c1d",
    fontSize: "16px",
    fontWeight: 400,
    "@media (max-width:500px)": {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  itemImage: {
    width: "25%",
    textAlign: "center",
  },
  wrapperAdv: {
    alignItems: "start",
    gap: "15px",
    display: "flex",
    margin: "0 30px 0 30px",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      flexDirection: "column",
      gap: "0px",
    },
  },
  sectionForItems: {
    alignItems: "start",
    width: "50%",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
};
