import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'
import { useState } from 'react';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setAge] = useState('');

    const addUserHandler = event => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setAge('');
    };

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = event => setAge(event.target.value);

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;