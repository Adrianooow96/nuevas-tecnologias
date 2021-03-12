import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Bygoogle from './Bygoogle'
import firebase from 'firebase/app'

export const Login = () => {

    const [usuario, setUser] = useState()
    const [password, setPass] = useState()


    const handleSubmit = (e) => {

        e.preventDefault()
        login(usuario,password)
    
    }

    return(

        <div className = 'container p-5'>
            <div className = 'row'>
                <div className = 'col-4 mx-auto'>
                    <form className = 'card card-body'>
                        <div className = 'mb-3'>
                            <label className = 'form-label'>Usuario</label>
                            <input type = 'email' className = 'form-control'/>
                        </div>
                        <div className = 'mb-3'>
                            <label className = 'form-label'>Contraseña</label>
                            <input type = 'password' className = 'form-control'/>
                        </div>

                        <button type = 'submit' className = 'btn btn-primary rounded'>Entrar</button>
                    </form>

                    <Link className = 'navbar-brand' to = '/registro'>Registrarse</Link>
                    <Link className = 'navbar-brand' to = '/recuperar'>¿Olvidaste tu contraseña?</Link>

                </div>
            </div>
        </div>
    )
}

function login(usuario, password)
{
    firebase
    .auth()
    .signInWithEmailAndPassword(usuario,password)
    .then(res => 
        {
            if (res.user) res.Auth.setLoggedIn(true)
        }).catch(e =>{
            console.log(e.message)
        }
    )
}