import React from 'react';

const ChannelItem = ({ iconSrc, children, actionIcons = [] }) => (
    <div className="channel-item">
      <div className="channel-content">
        <img loading="lazy" src={iconSrc} alt="" className="channel-icon" />
        <div className="grow">{children}</div>
      </div>
      <div className="action.icons">
        {actionIcons.map((icon, index) => (
          <img key={index} loading="lazy" src={icon.src} alt={icon.alt} className="action-icon" />
        ))}
      </div>
    </div>
  );

  export default ChannelItem;