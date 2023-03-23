// import axios from '../../helpers/axios';
import {loginPending,loginSuccess,loginFailed,signupSuccess,signupPending,signupFailed,logoutPending,logoutSuccess} from '../reducers/auth.slice';
import { db, fb, auth, static_img } from '../../config/firebase';
import { fetchProfile } from './profile.action';
import { clearProfile } from 'redux/reducers/profile.slice';
import { clearUser } from 'redux/reducers/user.slice';
import { clearChat } from 'redux/reducers/chat.slice';




export const signup = (user, history) => async (dispatch) => {
      console.log(user);
       dispatch(signupPending());
        fb.auth().createUserWithEmailAndPassword(
          user.email,
          user.password
      ).then((res)=>{
        return db.collection('users').doc(res.user.uid).set({
          uid: res.user.uid,
          name: user.name,
          email: user.email,
          phone: user.phone,
          password: user.password,
          photoUrl: static_img,
          lastActive: new Date().getTime(),
          monthlyConnection: 5,
          usedConnection: 0,
          registeredOn:new Date()
        })
      }).then(() => {
        dispatch(signupSuccess());
        history.push("/login");
      }).catch((err) => {
        console.error("Error signiing up: ", err);
        var errorMessage = err.message;
        dispatch(signupFailed({ errorMessage }));
      })
  }

  export const signin = (user,history) => async (dispatch) => {
    dispatch(loginPending());
    fb.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log('Signed In user is: ', user.email);
      const currentUserProfile = db.collection("users").doc(user.uid);
  
      currentUserProfile.get()
      .then((doc) => {
          const user = doc.data();
          var uid = userCredential.user.uid;
          console.log(user)
          dispatch(loginSuccess({ user, uid }));
          dispatch(fetchProfile());
          dispatch(updateLastActive(uid));
          history.push('/apps/sessions');
          // history.push('/apps/sessions');
          // window.location.href = '/candidates';
      })
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error Code is: ', errorCode, + ' Msg is: ', errorMessage);
      dispatch(loginFailed({ errorMessage }));
    });
 
  }


export const logout = (history) => async (dispatch) => {
  dispatch(updateLastActive(fb.auth().currentUser.uid));
  fb.auth().signOut().then(() => {
    console.log('logout successful!');
    dispatch(clearProfile());
    dispatch(clearUser());
    dispatch(clearChat());
    dispatch(logoutSuccess());
    history.push('/login');
  }).catch((error) => {
    // An error happened.
    console.log('logout failed response: ', error.message);
  });
  
}


export const fetchUserData = (uid) => async (dispatch) => {
  const currentUserProfile = db.collection("users").doc(uid);
  
      currentUserProfile.get()
      .then((doc) => {
          const user = doc.data();
          console.log(user)
          dispatch(loginSuccess({ user }));
      })
}


export const updateLastActive = (uid) => async (dispatch) => {
  const currentTimeStamp = new Date().getTime();
  var userRef = db.collection("users").doc(uid);
   userRef.update({
      lastActive: currentTimeStamp,
  })
  .then(() => {
    console.log('Timestamp updated');
  })
  .catch((error) => {
    var errorMessage = error.message;
    console.log('Error updating timestamp:', errorMessage);
  });
}

export const updateProfile = (profileData, userID, file, navigate, setLoading, url) => async (dispatch) => {
  // return  
  db.collection('employees').doc(userID).update({
    paymentLink: profileData.paymentLink,
    imageUrl: url,
  }).then((res)=>{
       if(profileData?.password){
        //update password start
        const user = auth.currentUser;
        user.updatePassword(profileData.password)
          .then(() => {
            setLoading(false);
            console.log("Password updated successfully");
            notifySuccessFxn("Updated successfully");
            navigate('/dashboard/home', { replace: true });
          })
          .catch((error) => {
            setLoading(false);
            console.error("Error updating password: ", error);
            notifyErrorFxn(error.message);
          });
       //update password end
       }else{
        setLoading(false);
        console.error("No Password to update");
        notifySuccessFxn("Updated successfully");
        navigate('/dashboard/home', { replace: true });
       }
     
  }).catch((err) => {
    setLoading(false);
    console.log("ERR-: ", err);
  })
}


export const uploadProfileImage = (profileData, file, userID, navigate, setLoading) => async (dispatch) => {
  const imageName = uuidv4() + '.' + file?.name?.split('.')?.pop();
  console.log('File Name: ', imageName);
  const uploadTask = storage.ref(`profile_images/${imageName}`).put(file);
  uploadTask.on(
    "state_changed",
    snapshot => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      // setProgress(progress);
    },
    error => {
      console.log(error);
    },
    () => {
      storage
        .ref("profile_images")
        .child(imageName)
        .getDownloadURL()
        .then(url => {
          console.log('Image URL: ', url);
          dispatch(updateProfile(profileData, userID, file, navigate, setLoading, url));
        });
    }
  );
}
