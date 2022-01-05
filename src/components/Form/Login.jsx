import React, {useState} from "react"
import '../../Css/contextauth.css'
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'


const Login =()=>{

    const [loginUser,setLoginUser] = useState({})
    const [error, setError] = useState()
    const auth = getAuth()

    const onChange=(event)=>{
        setLoginUser({
            ...loginUser,
            [event.target.name] : event.target.value
        })
    }
    
    const onSubmit=(e)=>{
        e.preventDefault()
        if(loginUser.email !== '' && loginUser.password !== ''){
            signInWithEmailAndPassword(auth, loginUser?.email, loginUser?.password)
        .then((userCredential)=>console.log(userCredential))
        .catch((error)=>setError(error.message))
        }else{
            alert('llena los campos')
        }
    }

    return (
        
        <form className="formAuth" action="">
            <h2>Login</h2>
            <input type='text' placeholder="email" name="email" onChange={onChange}></input>
            <input type='text' placeholder="password" name="password" onChange={onChange}></input>
            <button  type="submit" onClick={onSubmit}> Login </button> 
            {error && <p style={{color: 'red'}} >{`${error}`}</p>}
        </form>
    )
}


export default Login