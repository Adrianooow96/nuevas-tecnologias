import React,{useState} from 'react';
import {link} from 'react-router-dom';
import  firebase, {Auth} from 'firebase/app';


export const Registro = () =>
{

    const [usuario, setUser] = useState()
    const [password, setPass] = useState()
    const [repass, setRepass] = useState()

    const handleSubmit = (e) => {

        e.preventDefault()
       addUser(usuario,password,repass)
    }
    return(
        <div className = 'row'>
            <div className ='col-md-4'>

                <form className = 'card card-bady' onSubmit = {handleSubmit}>
                    <div className = 'mb-3'>
                        <label className = 'form-label'>Usuario</label>
                        <input type = 'email' className = 'form-control'
                        onChange = {e => setUser(e.target.value)}
                        value = {usuario}/>
                    </div>
                    <div className = 'mb-3'>
                        <label className = 'form-label'>Password</label>
                        <input type = 'password' className = 'form-control'
                        onChange = {e => setPass(e.target.value)}
                        value = {password}/>

                    </div>

                    <div className = 'mb-3'>
                        <label className = 'form-label'>Repetir Password</label>
                        <input type = 'password' className = 'form-control'
                         onChange = {e => setRepass(e.target.value)}
                         value = {repass}/>
                    </div>

                    <button type = 'submit' className = 'btn btn-primary'>Guardar</button>
                </form>

            </div>
        </div>
    )
}

function addUser(email, password, repassword)
{

    if(password == repassword)
    {
        firebase.auth().createUserWithEmailAndPassword(email,password).then( res =>{ 
            if (res.user) Auth.setLoggedIn(true)
        })
        .catch(e => {console.log(e.message)})
    }
    else
    {
        alert("Las contraseñas no son identicas.");
    }

 
}
