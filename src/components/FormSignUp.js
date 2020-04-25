import React, {useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {API_BASE_URL} from '../common/Constants';

const FormSignUp = () => {
    const history = useHistory();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        if (IsValidForm()){
            const res = await axios.post(`${API_BASE_URL}/api/signup`, {
                userName,
                password
            });
            if(res.status === 200){
                history.push('/signin');
            }
        }
    }

    const IsValidForm = () => {
        setErrors([]);
        if(userName === ""){
            setErrors(['Username vacio']);
            return false;
        }else if(password === ""){
            setErrors(['Contraseña vacia']);
            return false;
        }else{
            return true;
        }
    }

    
    return (
        <Form onSubmit={e => handleSubmit(e)}>
            {
                errors.length > 0 ? 
                    errors.map((error, index) => 
                        <Alert 
                            key={index}
                            variant='danger'
                        >{error}</Alert>) 
                : ''
            }
            <Form.Group controlId="formBasicEmail">
                <Form.Label>UserName</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="UserName" 
                    onChange={e => setUserName(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Contraseña"
                    onChange={e => setPassword(e.target.value)} 
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Registrarme !!
            </Button>
        </Form>
    )
}

export default FormSignUp;