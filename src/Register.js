import {auth} from './firebase'
import {createUserWithEmailAndPassword, validatePassword} from 'firebase/auth';
import { useState } from 'react';

    
function Register(event){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirm,setConfirm] = useState('');
    const [error,setError] = useState('');

    event.preventDefault();
    setError('');
    if(validatePassword()){
        createUserWithEmailAndPassword(auth,email,password)
        .then((res) => {
            console.log(res.user);
        })
        .catch(err => setError(err.message));
    }
    setEmail('');
    setPassword('');
    setConfirm('');
}