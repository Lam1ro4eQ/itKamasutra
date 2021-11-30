import React from 'react'
import {AffairType} from "./HW2";
import affair from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
    }// need to fix

    return (
        <div className={affair.mainLLine}>
            <span className={affair.affairName}>{props.affair.name}</span>
            <span className={affair.affairPriority}>{props.affair.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair


// const terstArr = [{id:1,name:"tets"}, {id:1,name:"tets"}]  //Array<AffairType>
// const terst = {id:1,name:"tets"}  //AffairType