import React, {useState} from 'react';

const Form2 = () => {
    const [user, setUser] = useState({});
    const getUser = (e) => {
        e.preventDefault();
        setUser({...user, [e.target.name]:e.target.value})
    }

    return (
        <div>
            <form>
                <div><label>Name: <input type="text" name={'name'} onChange={getUser}/></label></div>
                <div><label>Age: <input type="number" name={'age'} onChange={getUser}/></label></div>
                {JSON.stringify(user)}
            </form>
        </div>
    );
};

export {Form2};