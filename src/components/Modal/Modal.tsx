import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { modalStore } from "@/domain";
import { Box } from "@mui/material";
import { ClassesSx } from "@/theme/theme";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { COLOR_ORANGE } from "@/const";
import { montserrat } from "@/components/header/HeaderSite/HeaderSite";
import { toast } from "react-toastify";
import { sendContactForm } from "@/lib/api";

export interface SimpleDialogProps {
  open: boolean;
  onClose?: (value: string) => void;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const [name, setName] = useState("");
  const [mob, setMob] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    modalStore.closeModal();
  };

  const handleListItemClick = (value: string) => {
    // onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={props.open} maxWidth={"xl"}>
      <DialogTitle sx={{ textAlign: "center", fontSize: "25px" }}>Создание заявки</DialogTitle>
      <Box sx={classes.content}>
        <Box sx={classes.inputItem}>
          <TextField
            id="name"
            label="Имя"
            sx={{ ...classes.input }}
            variant="outlined"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Box>
        <Box sx={classes.inputItem}>
          <TextField
            id="mob"
            label="Телефон"
            variant="outlined"
            sx={{ ...classes.input }}
            value={mob}
            onChange={(e) => {
              setMob(e.target.value);
            }}
          />
        </Box>
        <Box sx={classes.inputItem}>
          <TextField
            id="Сообщение"
            label="Сообщение"
            multiline={true}
            variant="outlined"
            rows={4}
            value={message}
            sx={{ ...classes.inputMessage }}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            className={montserrat.className}
            sx={{
              display: "flex",
              backgroundColor: COLOR_ORANGE,
              color: "white",
              fontSize: "25px",
              fontWeight: 600,
              padding: "5px 10px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
            onClick={async () => {
              if (mob.length > 8 && mob.length < 14) {
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
                  name: `${name}`,
                  email: "",
                  mob: `${mob}`,
                  message: `${message}`,
                  click: "Модальное окно",
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
              setMessage("");
              setName("");
            }}
          >
            Отправить
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

const classes: ClassesSx = {
  inputItem: { display: "flex", width: "100%", justifyContent: "center" },
  input: {
    margin: "10px",
    width: "300px",
    "@media max-width(600px)": {
      width: "200px",
    },
  },
  inputMessage: {
    width: "300px",
    margin: "10px",

    "@media max-width(600px)": {},
  },

  content: { margin: "0 25px 25px 25px", "@media max-width(600px)": {} },
};
