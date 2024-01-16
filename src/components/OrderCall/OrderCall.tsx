import { FC, useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { ClassesSx } from "@/theme/theme";
import TextField from "@mui/material/TextField";
import { sendContactForm } from "@/lib/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {}
export const OrderCall: FC<Props> = () => {
  const [mob, setMob] = useState<string>("");

  const validateNumber = (value: number | string) => {
    const regex = /^\d{1,13}$/;
    const val = value.toString();

    if (regex.test(val) || val === "") {
      setMob(val);
    } else {
    }
  };

  return (
    <Box sx={classes.root} display={"flex"} alignItems={"center"}>
      <Box sx={classes.wrapperInput}>
        <Box sx={classes.input}>
          <TextField
            id="outlined-basic"
            label="Телефон"
            variant="outlined"
            size={"small"}
            value={mob}
            onChange={(e) => {
              validateNumber(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Button
            sx={classes.button}
            variant="contained"
            onClick={async () => {
              if (mob.length > 6 && mob.length < 14) {
                toast.success("Заявка отправлена!", {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                await sendContactForm({
                  name: "",
                  email: "",
                  mob: `${mob}`,
                  message: "Требуется перезвонить(voda-bsv)",
                  click: "Главная (пользователь кликнул заказать звонок)",
                });
              } else {
                toast.error("Ошибка ввода", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }
              setMob("");
            }}
          >
            Заказать звонок
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const classes: ClassesSx = {
  root: {
    "@media (max-width:800px)": {
      justifyContent: "center",
    },
  },
  wrapperInput: {
    gap: "5px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "5px",
    "@media (max-width:400px)": {
      flexDirection: "column",
    },
  },
  textField: { color: "#fe6c36", width: "100%" },
  button: {
    backgroundColor: "#ff6c36",
    width: "100%",
  },
  input: {},
};
