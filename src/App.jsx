import React from 'react'
import {StreamChat} from 'stream-chat';
import {Chat, chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

// import ChannelListContainer from './components/ChannelListContainer';
// import ChannelContainer from './components/ChannelContainer';

import { ChannelContainer, ChannelListContainer, Auth } from './components';


import './App.css';

const apiKey = 'djp6ag8zjp6f' ;

const client = StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {

  if (!authToken) return <Auth/>

  return (
    <div className = "app__wrapper">
       <Chat client={client} theme="team light">
           <ChannelListContainer
           
           />

           <ChannelContainer
           
           />
       </Chat>
    </div>
  )
}

export default App