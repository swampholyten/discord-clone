import MainChat from './components/main/MainChat';
import MainServerList from './components/ServerList/MainServerList';
import './style/App.css'


export default function App(){

  return (
    <>
      <div className='app'>

        
      <MainServerList/>
        <MainChat />
        

      </div>
      
    </>
  )
}
