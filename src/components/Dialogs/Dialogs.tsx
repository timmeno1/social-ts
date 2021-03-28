import React, {ChangeEvent, createRef, KeyboardEvent} from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessageItem/MessageItem";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs =  (props:DialogsPropsType) => {

     let DialogsComponents = props.DialogsData.map( dialog => <DialogItem id={dialog.id} name={dialog.name} />);
     let MessageComponents = props.MessagesData.map( message => <li><MessagesItem message={message.message} id={message.id} own={message.own}/></li>);

     let msgBody = createRef<HTMLTextAreaElement>()

     let onMsgChange = () => {
         if(msgBody.current){
             let text = msgBody.current.value
             props.updateMessageBody(text)
         }
     }
     let onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
         if(e.charCode === 13) props.sendMessage()
     }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {DialogsComponents}
            </div>
            <div className={css.messages}>
                <ul>
                    {MessageComponents}
                </ul>
            </div>
            <div>
                <div><textarea ref={msgBody}
                               value={props.messageBody}
                               onChange={onMsgChange}
                               placeholder={"Enter your message"}
                               onKeyPress={onKeyPressHandler}
                ></textarea></div>
                <div><button onClick={props.sendMessage}>Send</button></div>
            </div>
        </div>
    );
}

export default Dialogs;