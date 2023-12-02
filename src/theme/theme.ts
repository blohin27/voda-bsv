import { createTheme } from "@mui/material";
import { ruRU } from "@mui/material/locale";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Palette, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {}
  interface PaletteOptions {}
}

export type ClassesSx = ForkedRecord<string, SxProps<Theme>>;
// export type ClassesSx1 = ForkedRecord<string, SxProps<Theme>>;

export type ForkedRecord<K extends string, T> = {
  [P in K]: T;
};

export const applicationTheme = createTheme({}, ruRU);
