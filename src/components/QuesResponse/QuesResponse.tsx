import React, { FC, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { ClassesSx } from "@/theme/theme";
import { COLOR_BLACK, COLOR_BLUE_SECTION } from "@/const";

interface IProps {}
export const QuesResonse: FC<IProps> = () => {
  const [hover, setHover] = useState(0);

  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <Box sx={classes.title}>Вопрос-ответ</Box>
          <Box>
            <Accordion
              sx={classes.itemAccord}
              onMouseOver={() => setHover(1)}
              onMouseOut={() => {
                setHover(0);
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon fontSize={"large"} style={{ color: "#fc6c36" }} sx={{ bgcolor: hover === 1 ? "yellow" : "" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant={"h6"}>Что включает в себя стандартный ремонт скважины?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Стандартный ремонт скважины включает диагностику проблемы, очистку скважины, замену поврежденных частей, таких как насосы и трубы, и проверку
                  системы на герметичность.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion
              sx={classes.itemAccord}
              onMouseOver={() => setHover(2)}
              onMouseOut={() => {
                setHover(0);
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon fontSize={"large"} style={{ color: "#fc6c36" }} sx={{ bgcolor: hover === 2 ? "yellow" : "" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant={"h6"}>Как часто нужно проводить обслуживание скважины?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Рекомендуется проводить профилактическое обслуживание скважины не реже одного раза в год, чтобы предотвратить серьезные поломки и убедиться в
                  ее безопасности и эффективности.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion
              sx={classes.itemAccord}
              onMouseOver={() => setHover(3)}
              onMouseOut={() => {
                setHover(0);
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon fontSize={"large"} style={{ color: "#fc6c36" }} sx={{ bgcolor: hover === 3 ? "yellow" : "" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant={"h6"}>Как определить, что скважина нуждается в ремонте?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Признаки, указывающие на необходимость ремонта скважины, включают уменьшение дебита воды, изменение вкуса или цвета воды, и странные звуки из
                  насоса или скважины.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion
              sx={classes.itemAccord}
              onMouseOver={() => setHover(3)}
              onMouseOut={() => {
                setHover(0);
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon fontSize={"large"} style={{ color: "#fc6c36" }} sx={{ bgcolor: hover === 3 ? "yellow" : "" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant={"h6"}>На что обратить внимание при выборе подрядчика для ремонта скважины?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Выбирая подрядчика, обратите внимание на их лицензии, опыт работы, отзывы клиентов, а также на предлагаемые гарантии и стоимость услуг.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion
              sx={classes.itemAccord}
              onMouseOver={() => setHover(3)}
              onMouseOut={() => {
                setHover(0);
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon fontSize={"large"} style={{ color: "#fc6c36" }} sx={{ bgcolor: hover === 3 ? "yellow" : "" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant={"h6"}>Гарантирует ли компания качество выполненных работ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Наша компания предоставляет гарантии на все виды работ по ремонту скважин, обеспечивая клиентов уверенностью в долгосрочной надежности и
                  эффективности проведенных работ.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion
              sx={classes.itemAccord}
              onMouseOver={() => setHover(3)}
              onMouseOut={() => {
                setHover(0);
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon fontSize={"large"} style={{ color: "#fc6c36" }} sx={{ bgcolor: hover === 3 ? "yellow" : "" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant={"h6"}>Что включает в себя послеремонтное обслуживание скважины?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Послеремонтное обслуживание включает регулярные проверки, чистку и калибровку оборудования, чтобы обеспечить его бесперебойную и эффективную
                  работу.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: { marginBottom: "30px" },
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  itemAccord: { backgroundColor: COLOR_BLUE_SECTION },
  title: {
    marginTop: "40px",
    paddingTop: "40px",
    marginBottom: "30px",
    fontSize: "48px",
    color: COLOR_BLACK,
    fontWeight: 700,
    textAlign: "center",
    "@media (max-width: 1200px)": {
      fontSize: "48px",
      marginTop: "20px",
      paddingTop: "60px",
      marginBottom: "30px",
    },
    "@media (max-width: 950px)": {
      fontSize: "38px",
      marginTop: "40px",
      paddingTop: "40px",
      marginBottom: "25px",
    },
    "@media (max-width: 640px)": {
      fontSize: "32px",
      marginTop: "30px",
      paddingTop: "30px",
      marginBottom: "20px",
    },
    "@media (max-width: 480px)": {
      fontSize: "27px",
      marginTop: "20px",
      paddingTop: "30px",
      marginBottom: "15px",
    },
  },

  content: { maxWidth: "800px", margin: "0 auto", gap: "15px", display: "flex", justifyContent: "center", flexDirection: "column", padding: "0 16px 0 16px" },
};
