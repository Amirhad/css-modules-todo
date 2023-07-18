import React from "react";
import { NavLink,useParams } from "react-router-dom";
import styles from "../intoUser/user.module.css"


export const User = ({ user }) => {
  const setActive  = ({isActive}) => isActive ? styles.activeLink  : ''
    const id =parseInt( useParams().id)
  return ( 
    <li className={styles.li}>
      <NavLink className={setActive}  to={`/${user.id}`}>{user.name}</NavLink>
    </li>
  );
};
