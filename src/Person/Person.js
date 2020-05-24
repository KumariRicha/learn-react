import React, { useState } from 'react';
const Person = (props) => {
    const [gender1, setGender] = useState({
        genders: [{ gender: 'male' }, { gender: 'female' }, { gender: 'trans' }],
        otherState: 'Present'
    })


    const changeGender = () => {
        setGender({ genders: [{ gender: 'female' }, { gender: 'trans' }, { gender: 'male' }] },
            console.log(gender1)
        )
    }
    return (<div>
        <input type="text" onChange={props.nameChanger} />
        <p>
            <button onClick={changeGender}>Change Gender</button>
            Hi, This is {props.title} Component and has an {props.id} and can be of "{gender1.genders[0].gender},
            {gender1.genders[1].gender},{gender1.genders[2].gender}" gender.
        </p>

    </div>)

}
export default Person;