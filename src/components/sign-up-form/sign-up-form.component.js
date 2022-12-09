import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";

import './sign-up-form.styles.scss'
import '../button/button.styles.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const {setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert('passwords do not match')
      return
    }

    try {
      // Authenticate New User
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      
      // Update context
      setCurrentUser(user)
      
      // Build New User Document after Auth is returned
      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields();

    } catch(error){
      if(error.code === 'auth/email-already-in-use'){ alert('Cannot create user, email already in use')} else {console.log('user creation encountered an error', error)}
    }
  };

  return (
    <div className="sign-up-container">
    <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName} 
        />
        <FormInput 
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email} 
        />
        <FormInput 
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password} 
        />
        <FormInput 
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button buttonType='' type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
