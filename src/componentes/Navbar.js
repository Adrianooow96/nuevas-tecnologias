import React from 'react'
import { Link } from 'react-router-dom'
import Bygoogle from './Bygoogle'

export const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/Inicio">Inicio</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/nosotros">Nosotros</Link>
                    <Link className="nav-link active" aria-current="page" to="/trabajos">Trabajos</Link>
                </div>
                <div className="navbar-nav ml-auto">
                    <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                    <Link className="nav-link active" aria-current="page" to="/Registro">Registro</Link>
                    <Bygoogle/>
                </div>
            </div>
        </div>
    </nav>

)