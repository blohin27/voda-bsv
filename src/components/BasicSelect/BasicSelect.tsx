import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { modalStore } from "@/domain";
import { FC } from "react";
import { observer } from "mobx-react";
import { COLOR_ORANGE } from "@/const";
import { FormHelperText } from "@mui/material";

export const BasicSelect = observer(() => {
  const handleChange = (event: SelectChangeEvent) => {
    modalStore.setStateServiceAll(event.target.value);
  };

  return (
    // <Box sx={{ minWidth: 220, display: "flex", justifyContent: "center" }}>
    //   <FormControl sx={{ m: 1, minWidth: 120 }}>
    //     <Select value={modalStore.stateServiceAll} label="Выберите тип услуги" onChange={handleChange} inputProps={{ "aria-label": "Without label" }}>
    //       <MenuItem value={"пульт1"}>Ремонт и чистка</MenuItem>
    //       <MenuItem value={"пульт2"}>Монтаж и водоснабжение</MenuItem>
    //       <MenuItem value={"пульт3"}>Водоочистка</MenuItem>
    //       <MenuItem value={"пульт4"}>Канализация</MenuItem>
    //     </Select>
    //   </FormControl>
    // </Box>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select value={modalStore.stateServiceAll} onChange={handleChange} displayEmpty inputProps={{ "aria-label": "Without label" }}>
        <MenuItem value={"пульт1"} sx={{ fontSize: "" }}>
          Ремонт и чистка
        </MenuItem>
        <MenuItem value={"пульт2"}>Монтаж и водоснабжение</MenuItem>
        <MenuItem value={"пульт3"}>Водоочистка</MenuItem>
        <MenuItem value={"пульт4"}>Канализация</MenuItem>
      </Select>
    </FormControl>
  );
});
