import React from 'react'
import classes from '../styles/NewTeamMember.module.css';
// import Jivesh from '../assets/Team/JiveshLakhani.jpg';


const NewTeamMember = ({name, role, img}) => {
  return (
      <div className={classes["card"]}>
        <img src={Jivesh} alt="" />
        <h2>{name}</h2>
        <h3>{role}</h3>
      </div>
  )
}

export default NewTeamMember