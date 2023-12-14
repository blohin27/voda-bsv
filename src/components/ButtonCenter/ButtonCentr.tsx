import { FC } from "react";
import { ClassesSx } from "@/theme/theme";
import Box from "@mui/material/Box";
import { sendContactForm } from "@/lib/api";

interface IProps {
  title: string;
}
export const ButtonCentr: FC<IProps> = ({ title }) => {
  const change = async () => {
    await sendContactForm({ name: "Sergey", email: "Email@Email", message: "message1", subject: "subject1", sub: "123" });
  };
  return (
    <Box
      sx={classes.root}
      onClick={() => {
        change();
      }}
    >
      <Box sx={classes.wrapper}>
        <Box sx={classes.content}>{title}</Box>;
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {},
  wrapper: { display: "flex", justifyContent: "center" },
  content: {
    display: "flex",
    padding: "10px 15px 10px 15px",
    color: "white",
    fontWeight: "700",
    fontSize: "25px",
    backgroundColor: "#fd6c36",
    borderRadius: "5px",
    "@media (max-width:400px)": {
      fontSize: "15px",
    },
  },
};
