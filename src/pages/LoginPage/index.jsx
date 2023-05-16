import React from "react";
import { Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import './login.css'

export default function LoginPage() {

    const navigate = useNavigate();

    return(
        <div className="div-login text-center">
            <form className="form-signin" >
                <h1 className="h3 mb-3 font-weight-normal">Acesso à Central</h1>

                <input type="email" name="username" className="form-control" placeholder="Seu e-mail"  />

                <input type="password" name="password" className="form-control" placeholder="Sua senha" />

                <Button variant="dark" onClick={() => navigate('/dashboard')}>Entrar</Button>

                <p className="mt-5 mb-3 text-muted">&copy; upf.br</p>
            </form>
        </div>
    );
}