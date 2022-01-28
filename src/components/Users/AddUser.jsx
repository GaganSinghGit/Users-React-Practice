import react from "react"

import React from 'react';
import Card from "../UI/Card";
import styles from "./AddUser.module.css"
const AddUser = () => {
  const addUserHandler = (event)=>{
    event.preventDefault()
  }
  return (
  <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text"></input>

      <label htmlFor="age">Age (years)</label>
      <input id="age" type="number" />

      <button type="submit">Add User</button>
    </form>
  </Card>
  )
};

export default AddUser;
