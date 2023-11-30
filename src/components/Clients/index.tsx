import { useState } from 'react'
import { ClientType, ContactType } from "../../types";
import { 
  Box, 
  Grid, 
  Button, 
  Tooltip,
  Avatar,
  Stack
} from '@mui/material';
import Contacts from "../Contacts";
import { service } from '../../services/api';

export default function Clients({ clients } : { clients: ClientType[] | null}) {
  const [contacts, setContacts] = useState<ContactType[] | null>(null);
  const [clientAdd, setClientAdd] = useState<string>('');

  const handleClickContacts = async (clientId: string) => {
    const responseContacts = await service.getContacts(clientId)
    setContacts(responseContacts)
    setClientAdd(clientId)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <Grid container className="user-filters-container">
          <Grid xs={12}>
            <Stack direction="row" spacing={2}>
              {
                clients?.map((client, index) => (
                  <Button key={index} onClick={() => handleClickContacts(client.WPP_ID)}>
                    <Tooltip title={client.WPP_PUSHNAME}>
                      <Avatar alt={client.WPP_PUSHNAME} src={client.WPP_PICTURE}/>
                    </Tooltip>
                  </Button>
                ))
              }
            </Stack>
            {/* <Search /> */}
          </Grid>
          <Contacts clientId={clientAdd} contacts={contacts}/>
        </Grid>
      </Box>
    </>
  );
}