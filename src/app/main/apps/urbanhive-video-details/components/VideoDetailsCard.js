
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper, Button, Stack, Skeleton } from '@mui/material';
import { useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import Iconify from '../components/iconify';
//import MembersRowCard from 'src/components/members/members-row-card';
import { fetchEmployeer, fetchGroupMembers } from '../../../../../redux/actions/group.action';
import EmptyRowCard from './empty-row-card';
import VideosRowCard from './video-row-card';
import VideoDetailsBox from './video-details-box';
import { LocalFireDepartment } from '@mui/icons-material';



export default function VideoDetailsPage() {
  const location = useLocation();
  const dispatch = useDispatch();
 // const { user } = useSelector((state) => state.auth);
 //const { groupMembers, employeer, isLoading } = useSelector((state) => state.group);
 //const groupData = location.state?.groupData;
 //console.log(groupData)
//
 // useEffect(() => {
 //  dispatch(fetchGroupMembers(groupData?.members));
 //   dispatch(fetchEmployeer(user.employeerID));
 // }, [])
//
//
//
//
 // console.log("GROUP MEMBERS: ", groupMembers);
 // console.log("Employeer: ", employeer);


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

    const groupData = 
    { title:"Climbimg the Corporate Ladder",
    desc:" t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use .",
   tags:"business, office, workplace",
    id:"OWDSDE12323",
   
    }
        
    



  const myCoolerMembers = groupMembers?.length ? (
    groupMembers.map(member => {
      console.log("MEMBER: ", member);
      const timestampInSeconds = member?.accountCreated?.seconds;
      const timestampInMilliseconds = timestampInSeconds * 1000 + Math.floor(member?.accountCreated?.nanoseconds / 1000000);
      const date = new Date(timestampInMilliseconds);
      const dateString = date.toLocaleString();
      return (
       <>
        <VideosRowCard 
        videoId={groupData.id}
        title={groupData.title} 
        desc={groupData.desc}
        tags={groupData.tags}
      />
        </>
      )
    })
  ) : 
  <EmptyRowCard msg={"No video data."}/>

  return (
    <>
      {/*<Helmet>
        <title> Cooler | VIDEO-DETAILS </title>
  </Helmet>*/}
      <Container maxWidth="xl">
          {
              <>
              <VideosRowCard 
              videoId={groupData.id}
              title={groupData.title} 
              desc={groupData.desc}
              tags={groupData.tags}
              isDetail={true}
            />
            <VideoDetailsBox />
              </>

    //     isLoading ?
    //     <Stack>
    //     <Skeleton />
    //     <Skeleton animation="wave" />
    //     <Skeleton animation={false} />
    //     </Stack>
    //     :
    //     <VideosRowCard 
    //     videoId={groupData.id}
    //     title={groupData.title} 
    //     desc={groupData.desc}
    //     tags={groupData.tags}
    //   />
      }
      </Container>
    </>
  );
}