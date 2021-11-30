import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import affairs from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((affair: AffairType) => (
        <Affair // should work
            key={affair._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={affair}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div>

            {mappedAffairs}

            <button className={affairs.mainButton} onClick={setAll}>All</button>
            <button className={affairs.mainButton} onClick={setHigh}>High</button>
            <button className={affairs.mainButton} onClick={setMiddle}>Middle</button>
            <button className={affairs.mainButton} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
