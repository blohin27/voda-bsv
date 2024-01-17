import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { ClassesSx } from "@/theme/theme";
import { modalStore } from "@/domain";

export const SectionButtons = () => (
  <Box sx={classes.root} display={"flex"}>
    <Box mr={1} display={"flex"} justifyContent={"center"}>
      <Button
        variant="contained"
        style={{ backgroundColor: "#ff6c36" }}
        sx={classes.button1}
        onClick={() => {
          modalStore.openModal();
        }}
      >
        Создать заявку
      </Button>
    </Box>
    <Box ml={1} display={"flex"} justifyContent={"center"}>
      <Button sx={classes.button2} variant="contained">
        Расчитать стоимость
      </Button>
    </Box>
  </Box>
);

const classes: ClassesSx = {
  root: {
    "@media (max-width: 1100px)": {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  button1: {
    "@media (max-width: 1120px)": {
      justifyContent: "center",
      display: "none",
      // fontSize: "12px",
    },
  },
  button2: {
    "@media (max-width: 1100px)": {
      flexDirection: "column",
      justifyContent: "center",
      // fontSize: "12px",
    },
  },
};
