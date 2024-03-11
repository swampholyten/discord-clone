import React from "react";
import './mainStyle/ServerIconStyle.css';

const ServerIcon = ({ src, alt }) => (
    <div className="serverContainer">
      <img loading="lazy" src={src} alt={alt} className="serverIcon" />
      <div className="border-div" />
    </div>
  );
  
export default ServerIcon;