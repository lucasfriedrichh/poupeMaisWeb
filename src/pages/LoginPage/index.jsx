import React from 'react';
import { Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import "./login.css"

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
export default function LoginPage() {
    const navigate = useNavigate();
    
    return (
    <MDBContainer fluid className='p-4 background-radial-gradient d-flex justify-content-center align-items-center overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          Cresça seu dinheiro,  <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>alcance seus objetivos</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            O objetivo do aplicativo poupeMais é ajudar os usuários a gerenciar suas finanças pessoais,
            economizar dinheiro e alcançar objetivos financeiros.
            Com recursos e ferramentas acessíveis,
            o poupeMais ajuda os usuários a entender melhor suas finanças,
            tomar decisões informadas e planejar seu futuro financeiro com eficiência.
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <div className="text-center mb-4"> {/* Adicionado 'text-center' */}
                <Button className='enterButton' onClick={() => navigate('/dashboard')}>Entrar</Button>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
} 