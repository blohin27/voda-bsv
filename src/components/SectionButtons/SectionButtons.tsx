import { Box } from "@mui/system";
import Button from "@mui/material/Button";

export const SectionButtons = () => (
  <Box display={"flex"}>
    <Box mr={1}>
      <Button variant="contained" style={{ backgroundColor: "#ff6c36" }}>
        Обратный звонок
      </Button>
    </Box>
    <Box ml={1}>
      <Button variant="contained">Расчитать стоимость</Button>
    </Box>
  </Box>
);
