import React from 'react';

import "./error.css"

import {
  MDBContainer
}
from 'mdb-react-ui-kit';

export default function ErrorPage() {
    return (
    <MDBContainer fluid className='p-4 background-radial-gradient d-flex justify-content-center align-items-center overflow-hidden'>
        <h1 className='text'>Oops... Página não encontrada!!!</h1>
    </MDBContainer>
  );
} 

