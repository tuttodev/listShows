import React from 'react';
import {Container} from 'react-bootstrap';
import FormSignUp from '../components/FormSignUp';

const SignUp = () => {
    return(

        <Container className='mt-4'>
            
            <div style={{maxWidth: '300px'}} className='m-auto'>
                <h1>Registrate</h1>
                <FormSignUp />
            </div>
            
        </Container>

    )
}

export default SignUp;