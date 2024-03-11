import MainChat from './components/main/MainChat';
import MainServerList from './components/ServerList/MainServerList';
import MainChannelList from './components/ChannelList/MainChannelList';
import './style/App.css'


export default function App(){

  return (
    <>
      <div className='app'>

        
      <MainServerList/>
      <MainChannelList/>
      
      <MainChat/>
        

      </div>
      
    </>
  )
}
