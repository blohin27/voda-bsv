import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { modalStore } from "@/domain";
import { observer } from "mobx-react";
import { ClassesSx } from "@/theme/theme";
import { Box } from "@mui/material";
import { COLOR_ORANGE } from "@/const";

export const BasicSelect = observer(() => {
  const handleChange = (event: SelectChangeEvent) => {
    modalStore.setStateServiceAll(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl sx={{ m: 1, minWidth: "400", display: "flex", justifyContent: "center" }}>
        <Select value={modalStore.stateServiceAll} onChange={handleChange} displayEmpty inputProps={{ "aria-label": "Without label" }} sx={{ ...classes.title }}>
          <MenuItem value={"пульт1"} sx={{ ...classes.subTitle }}>
            Ремонт и чистка
          </MenuItem>
          <MenuItem value={"пульт2"} sx={{ ...classes.subTitle }}>
            Монтаж и водоснабжение
          </MenuItem>
          <MenuItem value={"пульт3"} sx={{ ...classes.subTitle }}>
            Водоочистка
          </MenuItem>
          <MenuItem value={"пульт4"} sx={{ ...classes.subTitle }}>
            Канализация
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
});

const classes: ClassesSx = {
  title: {
    fontSize: "27px",
    "@media (max-width:500px)": { fontSize: "18px" },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: COLOR_ORANGE,
      borderWidth: "2px",
    },
  },
  subTitle: { fontSize: "27px", "@media (max-width:500px)": { fontSize: "18px" } },
};
