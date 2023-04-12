import React from 'react'
import userIcon from 'src/images/userIcon.png';
import './playerCard.scss';

interface PlayerCardProps {
    icon?: string,
    userId: string,
    name: string,
    gamesPlayed: number,
    warnsApplied: number,
  }

  export const PlayerCard = (props: PlayerCardProps) => {
    const {icon, name, userId, gamesPlayed, warnsApplied}= props;
    
    return (
      <div className="userdiv" id={userId}>
        <div className="logo">
          <img src={icon || userIcon} alt= "UserDefaultIcon"/>
        </div>
        <div className="contentuserdiv">
          <div className="name">
            <span>{name}</span>
          </div>
          <div className="stats">
            <div className="gamesplayed">
              <span>Games played: {gamesPlayed || 0}</span>
            </div>
            <div className="warns">
               <span>Warns applied: {warnsApplied || 0}</span> 
            </div>
          </div>
        </div>
      </div>
    );
  };