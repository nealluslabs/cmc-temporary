import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import COOLERICON from '../../../../images/cooler-icon.png'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useDispatch } from 'react-redux';
//import { setInboxDetails } from '../../../../../redux/reducers/chat.slice';

export default function InboxListItem({ /*inboxMessages, user*/ }) {
 const dispatch = useDispatch();

  const setInboxData = (data) => {
   // dispatch(setInboxDetails(data));   
    // console.log("DATA:", data);
  }

  const inboxMessages = [
    { coolerName:"MARKETING EVENT",
      lastName:"Buoy",
      email:"johnboy@gmail.com",
      id:"OWDSDE12323",
     time:1679443205
    },
    { coolerName:"SPONSORSHIP SEMINAR",
    lastName:"Buoy",
    email:"johnboy@gmail.com",
    id:"OWDSDE12323",
   time:1679443205
  },
  { coolerName:"HR WELLNESS CHECK",
  lastName:"Buoy",
  email:"johnboy@gmail.com",
  id:"OWDSDE12323",
 time:1679443205
  },
   ]

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {inboxMessages.map((msg) => {
        const utcDate = new Date(msg?.time);
       const localTimeString = utcDate.toLocaleString();
        return (
        <>
       <ListItem alignItems="flex-start" onClick={() => setInboxData(msg)}>
        <ListItemAvatar>
          <Avatar alt="Cooler Icon" src={COOLERICON} />
          {/* <CircleNotificationsIcon /> */}
        </ListItemAvatar>
        <ListItemText
          primary={msg?.coolerName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* {user.firstName} */}
              </Typography>
              {`— ${localTimeString}…`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
            </>
        )
      })}
    </List>
  );
}
