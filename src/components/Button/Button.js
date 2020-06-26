import React, { useState }  from 'react';
import Icon from "@material-ui/core/Icon";
import Card from '@material-ui/core/Card';
import Textarea from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';

import './Button.css';

const ActionButton = (props) => {

const [formStatus, setFormStatus] = useState(false);
const [text, setText] = useState("");

const openForm = () => {
    setFormStatus({
        formStatus: true
    })
}

const closeForm = (e) => {
    setFormStatus({
        formStatus: false
    })
}


const renderAddButton = () => {
    const { list } = props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return(
        <div onClick={openForm} className="openFormButtonGroup" style={{ opacity: buttonTextOpacity, color: buttonTextColor, background: buttonTextBackground }}>
            <Icon>add</Icon>
            <p>{buttonText}</p>
        </div>
    )
}

const renderForm = () => {
    const {list } = props;
    const placeholder = list ? "Enter list title..." : "Enter a title for this card"
    const buttonTitle = list ? "Add List": "Add Card"
      return (
        <div>
            <Card style={{
                    overflow: "hidden",
                    minHeight: 80,
                    minWidth: 272,
                    padding: "6px 8px 2px"
                }}
            >
                <Textarea 
                    placeholder={placeholder}
                    autoFocus
                    onBlur={()=> setFormStatus(false)}
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                    style={{
                        resize: "none",
                        width: "100%",
                        outline: "none",
                        border: "none"
                    }}
                />
            </Card>
            <div className="formButtonGroup">
                <Button 
                    variant="contained" 
                    style={{color:"white", backgroundColor: "#5aac44"}}
                >{buttonTitle}
                </Button>
                <Icon style={{marginLeft: 8, cursor: "pointer"}}>close</Icon>
            </div>
        </div>
      )
 }

    return formStatus ? renderForm() : renderAddButton();
}
  export default ActionButton;