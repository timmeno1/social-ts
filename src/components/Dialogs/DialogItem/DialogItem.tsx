import React from "react";
import css from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: string
    name : string
}
const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={css.item + ' ' + css.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;