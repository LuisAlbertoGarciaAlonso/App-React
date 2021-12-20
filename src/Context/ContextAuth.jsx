import React,{useState} from "reat"
const AuthContext = React.createContext()
import "../Css/contextauth.css"
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"



export const AuthProvider = ({children}) => {
    
const [createUser, setCreateUser] = useState({})
const auth = getAuth()

const onChange= (evt) => {
    setCreateUser({    ...createUser,
        [evt.target.name] : evt.target.value})
    
}

const onSubmit = (e) =>{
    e.preventDefault()
    if(createUser.email !== "" && createUser.password !== ""){
createUserWithEmailAndPassword(auth, createUser?.email, createUser?.password)
.then(()=> alert("usuario creado"))
}else{
    alert("llenar los campos")
}

}

    return(
        <AuthContext.Provider value={{}}>
            <form className="form-auth">
                <h3>Crear Cuenta</h3>
                <input name="Email" type="text" placeholder="email" onChange={onChange}/>
                <input name="Password" type="text" placeholder="password" onChange={onChange}/>
                <button type="submit" onClick={onSubmit}>Crear Cuenta</button>
            </form>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext



