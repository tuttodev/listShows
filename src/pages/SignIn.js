import React from 'react';
import { Container } from 'react-bootstrap';
import FormSignIn from '../components/FormSignIn';

const SignIn = () => {
    return (

        <Container className='mt-4'>
            
            <div style={{maxWidth: '300px'}} className='m-auto'>
                <h1>Iniciar Sesión</h1>
                <FormSignIn />
            </div>
            
        </Container>

    )
}

export default SignIn;