import { useState } from "react"

export default function UpdatingObject (){
    // const user = {age: 18, name: 'Dorj'}
    // console.log(user)

    // user.age = 20; // 18 nastai baisan ghde odo 20 nastai bolson
    // console.log(user) 

    const [ user, setUser] = useState({age: 0, name: 'Dorj'})
    const check = () => {
        // user.age += 20;
        // setUser({age: user.age + 20, name: 'Dorj'})
        const newUser = {...user}
        newUser.age += 20;
        setUser(newUser)
    }

    return (
        <div>
            <button onClick={check}>
                USER AGE IS {user.age}
            </button>
        </div>
    )
}