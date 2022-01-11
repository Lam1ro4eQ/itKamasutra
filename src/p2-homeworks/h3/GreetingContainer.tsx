import React, {useState, ChangeEvent} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}
type UserType = {
    _id: string
    name: string
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const enterName = e.currentTarget.value;

        if (enterName !== "") {
            setName(enterName); // need to fix
            error && setError(''); // зануляем ошибку если она там была
        } else {
            setName('');
            setError('name is requared!');
        }
        console.log(name)
    }
    const addUser = () => {
        const trimmedNewName = name.trim();
        if (trimmedNewName === "") {
            setError('name is requared!');
            return;
        } else {
            addUserCallback(trimmedNewName)
            alert(`Hello ${trimmedNewName} !`); // need to fix
            setName('');
            console.log(name)
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
