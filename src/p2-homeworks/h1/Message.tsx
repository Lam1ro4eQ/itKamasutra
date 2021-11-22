import React from 'react'
import style from './Message.module.css'


export type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={style.master}>
            <div className={style.imgFlex}>
                <img className={style.imgMessage} src={props.avatar}/>
            </div>
            <div className={style.messageFlex}>
                <div className={style.insertFlexMessage}>
                    <div className={style.myName}>{props.name}</div>
                    <div className={style.myMessage}>{props.message}</div>
                </div>
                <div className={style.insertFlexTime}>
                    <div className={style.myTime}>{props.time}</div>
                </div>
            </div>

        </div>
    )
}

export default Message
