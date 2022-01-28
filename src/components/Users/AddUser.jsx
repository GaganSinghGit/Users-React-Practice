
import React from 'react';

import { useState } from 'react';
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css"
const AddUser = () => {

  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  
  const addUserHandler = (event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      return
    }
    if(+enteredAge < 1){
      return
    }
    
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (event) =>{
    setEnteredUsername(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    
  };
  return (
  <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>

      <label htmlFor="age">Age (years)</label>
      <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>

      <Button type="submit">Add User</Button>
    </form>
  </Card>
  )
};

export default AddUser;
