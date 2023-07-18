import React from "react";
import { useSelector } from "react-redux";
import { User } from "../intoUser/User";
import styles from "../users/Users.module.css"


export const Users = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <ul className={styles.ul}>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </ul>
  );
};
