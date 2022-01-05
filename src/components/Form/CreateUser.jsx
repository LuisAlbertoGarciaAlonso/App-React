import React, {useState} from "react"
import '../../Css/contextauth.css'
import {createUserWithEmailAndPassword, getAuth,onAuthStateChanged} from 'firebase/auth'


const FormUser =()=>{

    const [createUser,setCreateUser] = useState({})
    const [error, setError] = useState()
    const auth = getAuth()

    const onChange=(event)=>{
        setCreateUser({
            ...createUser,
            [event.target.name] : event.target.value
        })
    }
    
    const onSubmit=(e)=>{
        e.preventDefault()
        if(createUser.email !== '' && createUser.password !== ''){
        createUserWithEmailAndPassword(auth, createUser?.email, createUser?.password)
        .then(()=>alert('usuario creado'))
        .catch((error)=>setError(error.message))
        }else{
            alert('llena los campos')
        }
    }

    return (
        
        <form className="formAuth" >
            <h2>Crear Mi Cuenta</h2>
            <input type='text' placeholder="email" name="email" onChange={onChange}></input>
            <input type='text' placeholder="password" name="password" onChange={onChange}></input>
            <button type="submit" onClick={onSubmit}> Crear Cuenta</button>
            {error && <p style={{color: 'red'}} >{`${error}`}</p>}
        </form>
    )
}


export default FormUser