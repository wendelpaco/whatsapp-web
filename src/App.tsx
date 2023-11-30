import { useState, useEffect } from 'react'
import { service } from './services/api';
import { ClientType } from './types';
import "./index.css"
import { 
  Box, 
  Grid, 
  Skeleton, 
  Divider,
} from '@mui/material';
import Menu from './components/Menu';
import Clients from './components/Clients';


export default function App() {
  const [clients, setClients] = useState<ClientType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseClients = await service.getClients();
      setClients(responseClients);
    };
    if (!clients) {
      fetchData();
    };
  }, [clients]);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container >
        <Grid xs={12}>
          <Menu />
        </Grid>

        <Grid xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid xs={4} className="user-list-box">
                <Clients clients={clients}/>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* <Grid xs={4} container spacing={2}>
          {
            [1, 2, 3, 4, 5].map((contact) => (
              <div key={contact}>
                <Grid xs={2}>
                  <Skeleton variant="circular" width={50} height={50} />
                </Grid>

                <Grid xs={10}>
                  <Skeleton variant="rectangular" height={60} />
                </Grid>

                <Grid xs={12}>
                  <br />
                </Grid>
              </div>
            ))
          }
        </Grid> */}

        <Grid xs={1}>
          <Divider orientation="vertical" flexItem />
        </Grid>

        <Grid xs={7} container>
          <Grid xs={12}>
            <Skeleton variant="rectangular" height={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
