import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/auth.slice';
import authReducer from './reducers/auth.slice';
import profileReducer from './reducers/profile.slice';
import createDevReducer from './reducers/createDev.slice';
import userReducer from './reducers/user.slice';
import adminUserReducer from './reducers/adminUser.slice';
import developerReducer from './reducers/developer.slice';
import appointmentsReducer from './reducers/appointments.slice';
import bootcampReducer from './reducers/bootcamp.slice';
import chatReducer from './reducers/chat.slice';
import fuse from '../app/store/fuse';
import i18n from '../app/store/i18nSlice';
import chatApp from 'app/main/apps/urbanhive-inbox/store';
import { persistReducer } from 'redux-persist';
import storage from './storage';
import thunk from 'redux-thunk';
import inboxReducer from './reducers/chat.slice';
import groupReducer from './reducers/group.slice';

const reducers = combineReducers({
  login: loginReducer,
  auth:authReducer,
  profile: profileReducer,
  createDev:createDevReducer,
  user: userReducer,
  adminUser: adminUserReducer,
  developer:developerReducer,
  inbox: inboxReducer,
  group: groupReducer,
  appointments:appointmentsReducer,
  bootcamp: bootcampReducer,
  chat: chatReducer,
  fuse,
  i18n,
  
  chatApp,
});




const persistConfig = {
  key: 'root',
  storage,
   blacklist: ['auth','login','user']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
