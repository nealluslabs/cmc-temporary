import { useEffect } from 'react';
// @mui
import { Card, Container } from '@mui/material';


import { ChatWindow } from '../../chat-src/sections/@dashboard/chat';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInbox } from '../../../../../redux/actions/chat.action';
import { setInboxDetails } from '../../../../../redux/reducers/chat.slice';
import EmptyIMAGE from '../../images/empty-illustration.jpg'
import FeedSidebar from '../../chat-src/sections/@dashboard/chat/FeedSidebar';



export default function FeedList() {
  const dispatch = useDispatch();
////  const { user } = useSelector((state) => state.auth);
////  const { inboxDetails } = useSelector((state) => state.inbox);
////
////  
////  useEffect(() => {
////    dispatch(setInboxDetails(null));
////  }, [])
  //
//
  //useEffect(() => {
  //  dispatch(fetchInbox(user?.id))
  //}, [user])
//
  return (
      <Container maxWidth={'xl'}>
        <Card sx={{ height: '72vh', display: 'flex' }}>
          <FeedSidebar />
          {/*inboxDetails != null ?*/ <ChatWindow /> /*:*/ /*<span style={{margin: '5%'}}><img src={EmptyIMAGE} /></span>*/}
        </Card>
      </Container>
  );
}
