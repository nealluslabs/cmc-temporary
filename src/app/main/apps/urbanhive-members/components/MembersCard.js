
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper, Button, Stack, Skeleton } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Iconify from './Iconify';
import MembersRowCard from './members-row-card';
import { fetchEmployeer, fetchGroupMembers } from '../../../../../redux/actions/group.action';
import EmptyRowCard from './empty-row-card';



export default function MembersPage() {
  const location = useLocation();
  const dispatch = useDispatch();
//  const { user } = useSelector((state) => state.auth);
//  const { groupMembers, employeer, isLoading } = useSelector((state) => state.group);
//  const groupData = location.state?.groupData;


 // useEffect(() => {
 //   dispatch(fetchGroupMembers(groupData?.members));
 //   dispatch(fetchEmployeer(user.employeerID));
 // }, [])

 const groupMembers = [
  { firstName:"Jonny",
    lastName:"Buoy",
    email:"johnboy@gmail.com",
    id:"OWDSDE12323",
    accountCreated:{seconds:1679443205,nanoseconds:1679443205}
  },
  { firstName:"Jonny",
  lastName:"Buoy",
  email:"johnboy@gmail.com",
  id:"OWDSDE12323",
  accountCreated:{seconds:1679443205,nanoseconds:1679443205}
},
{ firstName:"Jonny",
lastName:"Buoy",
email:"johnboy@gmail.com",
id:"OWDSDE12323",
accountCreated:{seconds:1679443205,nanoseconds:1679443205}
},
 ]



  console.log("GROUP MEMBERS: ", groupMembers);
  //console.log("Employeer: ", employeer);
  const myCoolerMembers = groupMembers?.length ? (
    groupMembers.map(member => {
      console.log("MEMBER: ", member);
      const timestampInSeconds = member?.accountCreated?.seconds;
      const timestampInMilliseconds = timestampInSeconds * 1000 + Math.floor(member?.accountCreated?.nanoseconds / 1000000);
      const date = new Date(timestampInMilliseconds);
      const dateString = date.toLocaleString();
      return (
       <>
       {/* {employeer &&
       <MembersRowCard 
       name={employeer.firstName + " " + employeer.lastName} 
       email={employeer.email} 
       joined={employeer.accountCreated}
       status={"Paid"}
       isSelf={employeer.id === user.id ? true : false}
     />
     //Selet all from groups where employees ID in members(For PAID AND Not PAID Filter)
       } */}
      <MembersRowCard 
        name={member.firstName + " " + member.lastName} 
        email={member.email} 
        joined={dateString}
        status={"Paid"}
        isSelf={member.id /*=== user.id*/ ? true : false}
        />
        </>
      )
    })
  ) : 
  <EmptyRowCard msg={"Members that have joined will appear here."}/>

  return (
    <>
      {/*<Helmet>
        <title> Cooler | Members </title>
      </Helmet>*/}
        <center><h2>{"RECRUITERS"}</h2></center>
      <Container maxWidth="xl">
          {/* <SearchBox style={{ width: '100%' }} /> */}
          <br/>
          <Grid  container direction="row" justifyContent="flex-end" alignItems="flex-end">
          <Button variant="contained" style={{backgroundColor: "black", paddingTop: '10px', paddingBottom: '10px',  paddingRight: '30px', paddingLeft: '30px'}} startIcon={<Iconify icon="eva:plus-fill" />}>
          Post New
        </Button>
        </Grid>
          <br/>
          {
        /*isLoading ?
        <Stack>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        </Stack>
        :*/
        myCoolerMembers
      }
      </Container>
    </>
  );
}