import React from 'react';
import './mainStyle/UserSectionStyle.css'


const UserSection = ({ avatarSrc, username, tag, actionIcons = [] }) => (
    <div className="user-section">
        <img loading="lazy" src={avatarSrc} alt="User avatar" className="user-avatar" />
        <div className="user-info">
          <div className="username">{username}</div>
          <div className="tag">#{tag}</div>
    </div>
      <div className="user-action-icons">
        {actionIcons.map((icon, index) => (
          <img key={index} loading="lazy" src={icon.src} alt={icon.alt} className="user-action-icon" />
        ))}
      </div>
    </div>
  );

  export default UserSection;