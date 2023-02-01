import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { useState } from 'react';
import "./sign-in-form.styles.scss"

import {
    signInUserWithEmailandPassword,
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
} from  '../../utils/firebase/firebase.utils'


const defaultFormFields = {
    email: '',
    password: '',
}


const SignIn = () => {

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password,} = formFields
    const handleSubmit = async (event) => {
        event.preventDefault()
        
        try {
            const response = await signInUserWithEmailandPassword(email,password)
            console.log(response)
            resetFormFields()
        }catch (e) {
            switch(e.code) {
                case 'auth/wrong-password':
                    alert('incorect password ');
                    break;
                case 'auth/user-not-found':
                    alert('no user with this email')
                    break
                default:
                    console.log(e)
            }
            // if(e === "auth/wrong-password") {
            //     alert('incorect password ')
            // }
            console.log(e)
        }
        
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }
    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div className='sign-up-container'>
                <h1>Sign In Page</h1>
                <form onSubmit={handleSubmit}>
                <span>Already have an account?</span>
                <FormInput
                    label='Email'
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}                
                />
                <FormInput
                    label='Password'
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google">Google Sign in</Button>
                </div>
                </form>
                

        </div>
    )
}

export default SignIn