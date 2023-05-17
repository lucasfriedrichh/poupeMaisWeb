import React from 'react';
import { Link } from 'react-router-dom';

import "./error.css"

import { MDBContainer } from 'mdb-react-ui-kit';
import Footer from '../../components/Footer';

export default function ErrorPage() {
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient d-flex justify-content-center align-items-center overflow-hidden'>
      <Link to="/dashboard">
        <img src={require("../../images/logo1-removebg-preview.png")} alt="Logo" />
      </Link>
      <h1 className='text'>Oops... Página não encontrada!!!</h1>
      <footer>
        <Footer />
      </footer>
    </MDBContainer>
  );
}
