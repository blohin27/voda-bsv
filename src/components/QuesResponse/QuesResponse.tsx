import React, { FC, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { ClassesSx } from "@/theme/theme";
import { TitleComponent } from "@/components/TitleComponent/TitleComponent";

interface IProps {}
export const QuesResonse: FC<IProps> = () => {
  const [hover, setHover] = useState(0);

  return (
    <Box sx={classes.root}>
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>
          <TitleComponent title={"Вопросы ответ"}></TitleComponent>
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
                <Typography variant={"h6"}>Какие меры безопасности будут приняты у Вас?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  В среднем 2-5 часов. Зависит от сложности работ, площади (кв м) и количества комнат. Обычная поддерживающая уборка однокомнатной квартиры займет
                  2 часа, двухкомнатной — 2-3 часа, трехкомнатной — 3 часа, четырехкомнатной — более 4 часов. Более сложные виды (генеральная, после ремонта)
                  требуют больше времени чтобы убраться. Например, генеральный клининг элитных квартир из трех и более комнат занимает 5-6 часов. Чистка сложных
                  загрязнений, следов строительных смесей, очистка пятен на мебели может добавить +30 минут. Уборка праздников и мероприятий оценивается
                  персонально. Наведение порядка загородного дома, бизнес-центра или промышленного нежилого помещения зависит от квадратуры и дополнительных работ
                  по уборке.
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
                <Typography variant={"h6"}>Какие меры безопасности будут приняты у Вас?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  В среднем 2-5 часов. Зависит от сложности работ, площади (кв м) и количества комнат. Обычная поддерживающая уборка однокомнатной квартиры займет
                  2 часа, двухкомнатной — 2-3 часа, трехкомнатной — 3 часа, четырехкомнатной — более 4 часов. Более сложные виды (генеральная, после ремонта)
                  требуют больше времени чтобы убраться. Например, генеральный клининг элитных квартир из трех и более комнат занимает 5-6 часов. Чистка сложных
                  загрязнений, следов строительных смесей, очистка пятен на мебели может добавить +30 минут. Уборка праздников и мероприятий оценивается
                  персонально. Наведение порядка загородного дома, бизнес-центра или промышленного нежилого помещения зависит от квадратуры и дополнительных работ
                  по уборке.
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
                <Typography variant={"h6"}>Какие меры безопасности будут приняты у Вас?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  В среднем 2-5 часов. Зависит от сложности работ, площади (кв м) и количества комнат. Обычная поддерживающая уборка однокомнатной квартиры займет
                  2 часа, двухкомнатной — 2-3 часа, трехкомнатной — 3 часа, четырехкомнатной — более 4 часов. Более сложные виды (генеральная, после ремонта)
                  требуют больше времени чтобы убраться. Например, генеральный клининг элитных квартир из трех и более комнат занимает 5-6 часов. Чистка сложных
                  загрязнений, следов строительных смесей, очистка пятен на мебели может добавить +30 минут. Уборка праздников и мероприятий оценивается
                  персонально. Наведение порядка загородного дома, бизнес-центра или промышленного нежилого помещения зависит от квадратуры и дополнительных работ
                  по уборке.
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
  root: {},
  wrapper: { maxWidth: "1200px", margin: "0 auto" },
  itemAccord: { backgroundColor: "#fcfbf9" },

  content: { maxWidth: "800px", margin: "0 auto", gap: "15px", display: "flex", justifyContent: "center", flexDirection: "column", padding: "0 16px 0 16px" },
};
