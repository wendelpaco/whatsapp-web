import { useState } from 'react'
import { ContactType, MessageType } from "../../types";
import { service } from '../../services/api';
// import Messages from '../Messages';
import "./index.css"

import CheckIcon from '@mui/icons-material/Check';
import { 
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
  Grid,
  Divider,
  Button,
  Badge
} from '@mui/material';
import Messages from '../Messages';

export default function Contacts({contacts, clientId} : { contacts: ContactType[] | null, clientId: string }) {
  const [messages, setMessages] = useState<MessageType[] | null>([]);
  
  const handleClick = async (clientId: string, contractId: string) => {
    const responseMessages = await service.getMessages(clientId, contractId);
    setMessages(responseMessages);
  };

  return (
    <>
      { contacts?.map((contact, index) => (
        <Button onClick={() => handleClick(clientId, contact.WPP_ID)} key={index}>
          <List key={index} sx={{ width: '100%' }}>
            <Box sx={{ flexGrow: 1 }} >
              <Grid container>
                <Grid item={true} xs={12}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={contact.WPP_PICTURE}/>
                    </ListItemAvatar>

                    <CheckIcon className="message-delivered" />
                    <ListItemText primary={contact.WPP_PUSHNAME} secondary={contact.WPP_PUSHNAME} className="last-message" />
                  
                    <small>{contact.WPP_NAME}</small>
                    <Badge badgeContent={contact.WPP_PUSHNAME} color="success" invisible={false} className="unread-message-counter"/>
                  </ListItem>
                </Grid>

                <Grid item={true} xs={12}>
                  <Divider variant="inset" component="li" />
                </Grid>
              </Grid>
            </Box>
          </List>
        </Button>
      ))}
      <Grid xs={8} className="container-chats">
        <Messages msgs={messages}/>
      </Grid>
    </>
  );
}