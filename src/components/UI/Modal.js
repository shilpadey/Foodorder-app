import React from "react";
import  ReactDOM  from "react-dom";
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onHideCart}/>
    )
};

const ModalOverlay = (props) => {
    return (
       <div className={classes.modal}>
        <div className={classes.conten}>{props.children}</div>
       </div>
    );
};

const portalElement = document.getElementById('overlays');

const CartModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onHideCart={props.onHideCart}/>,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default CartModal
