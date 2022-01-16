import Button from "./Button";
import Card from "./Card";
import classes from "../UI/ErrorModal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const BackDrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm} />
    );
};

const ModalOverlay = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}><p>{props.title}</p></header>
            <div className={classes.content}><p>{props.message}</p></div>
            <footer className={classes.actions}><Button onClick={props.onConfirm}>Okay</Button></footer>
        </Card>
    );
};

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
                document.getElementById('overlay-root'))}
        </React.Fragment>
    );
};

export default ErrorModal;