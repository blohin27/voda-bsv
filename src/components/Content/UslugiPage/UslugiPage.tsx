import { FC, useCallback, useState } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { UslugiItem } from "@/components/Content/UslugiPage/UslugiItem";
import { COLOR_ORANGE } from "@/const";
import { grey } from "@mui/material/colors";

interface IProps {}
export const UslugiPage: FC<IProps> = () => {
  const [pokaz, setPokaz] = useState(false);

  const changePokaz = useCallback(() => {
    setPokaz((prevState) => !prevState);
  }, []);
  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.title}> Услуги</Box>
          <Box sx={classes.uslugiItems}>
            <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
            <UslugiItem title={"Чистка скважин"} photo={"/photo/2t.jpg"} />
            <UslugiItem title={"Избавление от ила и песка"} photo={"/photo/5t.jpg"} />
            <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
            <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
            <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
            {pokaz && (
              <Box sx={{ ...classes.uslugiItems }}>
                <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
                <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
                <UslugiItem title={"Ремонт скважины"} photo={"/photo/1t.jpg"} />
              </Box>
            )}
            <Box onClick={changePokaz} sx={{ ...classes.button, backgroundColor: `${pokaz ? "grey" : COLOR_ORANGE}` }}>
              {pokaz ? "Свернуть" : " Показать больше"}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  content: { margin: "0 16px 0 16px" },
  title: { fontSize: "30px", fontWeight: "600", textAlign: "center" },
  uslugiItems: { display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" },
  button: { display: "flex", backgroundColor: COLOR_ORANGE, color: "white", padding: "10px", fontWeight: "700", borderRadius: "3px", cursor: "pointer" },
  fade: {
    transition: "all .3s ",
  },
  fadeEnter: { opacity: 0 },
  fadeEnterActive: { opacity: 1 },
};
