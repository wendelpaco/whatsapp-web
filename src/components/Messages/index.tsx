import { MessageType } from "../../types";
import "./index.css"

import { 
  Box, 
  Grid, 
  Avatar, 
  Badge,
} from '@mui/material';

import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function Messages({ msgs } : { msgs: MessageType[] | null}) {

  const convertToDatetime = (timestamp: number) => {
    const data = new Date(timestamp * 1000);

    const day = data.getDate().toString().padStart(2, '0');
    const month = (data.getMonth() + 1).toString().padStart(2, '0');
    const year = data.getFullYear();
    const hours = data.getHours().toString().padStart(2, '0');
    const minutes = data.getMinutes().toString().padStart(2, '0');
    const seconds = data.getSeconds().toString().padStart(2, '0');

    const datetimeFormated = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return datetimeFormated;
  }

  return (
    <Box sx={{ flexGrow: 1 }} >
      {
        msgs?.map(message => (
          <Grid container className="card-content-agent">
            <Grid xs={1}>
              <Avatar src={message.WPP_PICTURE} className="card-content-avatar">
              </Avatar>
            </Grid>
    
            <Grid xs={11} className="card-content-text">
              { message.WPP_BODY }
              <Badge 
                badgeContent={ message.REACTION_WPP_REACTION } 
                color="secondary"
                className="reaction-badge"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              />
            </Grid>
    
            <Grid xs={12} className="card-content-date">
              {convertToDatetime(message.WPP_TIMESTAMP)}
              <DoneAllIcon/>
            </Grid>
          </Grid>
        ))
      }
    </Box>
  );
}