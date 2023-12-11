import { FC, useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { ClassesSx } from "@/theme/theme";
import TextField from '@mui/material/TextField';


interface Props {}
export const OrderCall: FC<Props> = () => {
  const [mob,setMob] = useState<string>('')

  const validateNumber=(value:number | string)=> {
    const regex = /^\d{1,13}$/;
    const val= value.toString()

    if (regex.test(val) || val==='') {
      setMob(val)
    } else {
    }
  }

  return (
    <Box sx={classes.root} display={"flex"} alignItems={"center"}>
      <Box sx={classes.wrapperInput}>
        <Box sx={classes.input} >
          <TextField id="outlined-basic" label="Телефон"  variant="outlined" size={'small'} value={mob} onChange={(e)=>{
            validateNumber(e.target.value)
          }}/>
        </Box>
        <Box>
          <Button sx={classes.button} variant="contained">
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
    gap:'5px',
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "5px",
    "@media (max-width:400px)": {
      flexDirection: "column",
    },
  },
  textField:{color:'#fe6c36',width:"100%"},
  button: {
    backgroundColor: "#ff6c36",
    width:'100%',
  },
  input: {},
};
