import React from 'react';

import './mainStyle/ChannelSectionStyle.css'

const ChannelSection = ({ iconSrc, children }) => (
    <div className="channel-section">
      <img loading="lazy" src={iconSrc} alt="" className="channel-image" />
      <div className='channel-title'>{children}</div>
    </div>
  );
  

  export default ChannelSection;