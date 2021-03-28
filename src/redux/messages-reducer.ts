import {v1} from "uuid";

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY'

type DialogsType = {
    id:string,
    name:string
}
type MessagesType = {
    id:string,
    message:string,
    own:boolean
}

export type DialogPageType = {
    DialogsData : Array<DialogsType>,
    MessagesData : Array<MessagesType>,
    messageBody : string
}

const initialState:DialogPageType = {

        DialogsData : [
            {id: v1(), name: "Timych"},
            {id: v1(), name: "Yulia"},
            {id: v1(), name: "Asal"},
            {id: v1(), name: "Sasha"},
            {id: v1(), name: "Dimych"}
        ],
        MessagesData : [
            {id: v1(), message: "How are you?!", own:false},
            {id: v1(), message: "Cool! Learning react!", own:true},
            {id: v1(), message: "Node rules", own:false},
            {id: v1(), message: "Node rules", own:false},
            {id: v1(), message: "Node rules", own:false}
        ],
        messageBody : ""

}

const messagesReducer = (state:DialogPageType= initialState, action:any) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: v1(),
                message: state.messageBody,
                own: true
            }
            return {
                ...state,
                messageBody: "",
                MessagesData : [...state.MessagesData, newMessage]
            }
        }
        case UPDATE_MESSAGE_BODY: {
            return {
                ...state,
                messageBody : action.body
            }
        }
        default:
            return state

    }
}

export const SendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const UpdateMessageBodyAC = (text:string) => {

    return {
        type: UPDATE_MESSAGE_BODY, body:text
    }
}

export default messagesReducer;