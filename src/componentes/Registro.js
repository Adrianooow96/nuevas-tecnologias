import React, { useState } from 'react'
import firebase from 'firebase/app'
import {Link} from 'react-router-dom'

export const Registro = () => {

  const [usuario, setUser] = useState()
  const [password, setPass] = useState()
  const [repass, setRepass] = useState()

  const handleSubmit = (e) => {
      e.preventDefault()
      addUser(usuario, password, repass)
  }

  return(
    <div className = 'container p-4'>
      <div className = 'row'>
        <div className = 'col-4 mx-auto'>
          <form className = 'card card-body' onSubmit = {handleSubmit}>
            <div className = 'mb-3'>
              <label className = 'form-label'>Usuario</label>
              <input type = 'email' className = 'form-control'
              onChange = {e => setUser(e.target.value)}
              value = {usuario} />
            </div>
            <div className = 'mb-3'>
              <label className = 'form-label'>Contraseña</label>
              <input type = 'password' className = 'form-control'
              onChange = {e => setPass(e.target.value)}
              value = {password} />
            </div>
            <div className = 'mb-3'>
              <label className = 'form-label'>Repetir contraseña</label>
              <input type = 'password' className = 'form-control'
              onChange = {e => setRepass(e.target.value)}
              value = {repass} />
            </div>
            <button type = 'submit' className = 'btn btn-primary rounded'>Guardar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

function addUser(email, password, repass){

  if(password === repass)
  {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then( res =>{ 
        if (res.user) res.Auth.setLoggedIn(true)
    })
    .catch(e => {
      console.log(e.message)
    })
  }
  else
  {
    alert("Las contraseñas no son identicas.");
  }
}