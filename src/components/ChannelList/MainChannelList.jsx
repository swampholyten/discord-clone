import React from 'react';

import ChannelItem from "./ChannelItem";
import ChannelSection from "./ChannelSection";
import UserSection from "./UserSection";

import './mainStyle/MainChannelStyle.css'
import star from '../../../src/assets/star.png'
import avatar from '../../../src/assets/avatar.png'

function DiscordComponent() {
  return (
    <div className="discord-component">

        <div className="ServerTitle">
            
            Guild
            <header className="header">        

            <img loading="lazy" src={star} alt="Guild icon" className="guild-icon" />
        
        </header>
          
    </div>
    
    <div className='dividerTitle'></div>  

    {/* DOWN */}

      <section className="channels">
        <ChannelSection TEXT>

          TEXT CHANNELS
        </ChannelSection>

        <ChannelSection>

          VOICE CHANNELS
        </ChannelSection>


          
        <div className="user-section">
          
          
          <div className="miniButton">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa9113e6aa5e3693a058cfd6af7b717af81d12f3fc8e1dafe9ceb973667893c0?apiKey=3480b97b5ecf4f06880107a908fe7614&" alt="" className="ml-5 aspect-square w-[18px]" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6ae67b5bfcbc6dae929b2e1f40d7f6eef0641d209a2915c1cd979e8efa5b0f7?apiKey=3480b97b5ecf4f06880107a908fe7614&" alt="" className="shrink-0 w-4 aspect-square" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a289891533155b115e98f4a11d1ae0ce5af68acb71ee4afec1a0001e012ec0bf?apiKey=3480b97b5ecf4f06880107a908fe7614&" alt="" className="shrink-0 w-4 aspect-square" />
          </div>

        </div>

        </section>


        <UserSection
          avatarSrc={avatar}
          username="User"
          tag="1000"

          actionIcons={[
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9e712e6af1cc85934f3663e4d64a65784524fb87d05a7cf8a67d82f44a092e9?apiKey=3480b97b5ecf4f06880107a908fe7614&", alt: "" },
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2386a48cda8181b0d6ff27b825facd4b95efc22af90ac0608428ea1a8e576238?apiKey=3480b97b5ecf4f06880107a908fe7614&", alt: "" },
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/95ab7849ceefb8cd7d79ec00548243b2bbe7300d669ec61a96a55922a45582d9?apiKey=3480b97b5ecf4f06880107a908fe7614&", alt: "" },
          ]}
        />

      

      
    </div>
  );
}

export default DiscordComponent;