import { useEffect } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { Box, Divider, Grid, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
//import { fCurrency } from 'src/utils/formatNumber';


export default function ChatWindow() {
  const dispatch = useDispatch();
  const history = useHistory();
 // const { inboxDetails } = useSelector((state) => state.inbox);

  return (
    <Stack sx={{ flexGrow: 1, minWidth: '1px' }}>
      <Divider />

      <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        <Stack sx={{ flexGrow: 1 }}>
          {/* <ChatMessageList conversation={conversation} /> */}
          <center><h4>LATEST {/*inboxDetails?.coolerName*/ "NOTIFICATIONS"}</h4></center>
          <Divider />
          <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{pl: 4, pt: 5}}
        >
          <p style={{fontSize: '20px', margin: '10px 0'}}><strong>{/*inboxDetails?.coolerName*/"ADMIN"}</strong> </p>
          <p style={{fontSize: '20px', margin: '10px 0'}}>{/*inboxDetails?.amount*/"NETWORKING EVENT"}</p>
          <p style={{fontSize: '20px', margin: '10px 0'}}> {/*inboxDetails?.amount*/"12/03/2023"}</p>
          
        </Grid>
          
        </Stack>

       {/* <h4>Chat Room</h4> */}
      </Box>
    </Stack>
  );
}
