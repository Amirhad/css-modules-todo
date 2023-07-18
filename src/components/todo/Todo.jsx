import React from 'react'
import styles from "../todo/todo.module.css"
export const  Todo = ({todo})  => {
  return (
    <>
<li className={styles.li}>
      
        {todo.title}
        
    </li>
    </>
  )
}

