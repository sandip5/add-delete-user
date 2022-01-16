import Button from "./Button";
import Card from "./Card";
import classes from "../UI/ErrorModal.module.css";

const ErrorModal = props => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}><p>{props.title}</p></header>
                <div className={classes.content}><p>{props.message}</p></div>
                <footer className={classes.actions}><Button onClick={props.onConfirm}>Okay</Button></footer>
            </Card>
        </div>
    );
};

export default ErrorModal;