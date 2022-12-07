import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { useState } from "react";

import './sign-in-form.styles.scss'
import '../button/button.styles.scss'

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password} = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    // eslint-disable-next-line no-unused-vars
    await createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // if(password !== confirmPassword) {
    //   alert('passwords do not match')
    //   return
    // }

    // try {
    //   const {user} = await createAuthUserWithEmailAndPassword(email, password)

    //   await createUserDocumentFromAuth(user, {displayName})
    //   resetFormFields();

    // } catch(error){
    //   if(error.code === 'auth/email-already-in-use'){ alert('Cannot create user, email already in use')} else {console.log('user creation encountered an error', error)}
    // }
  };

  return (
    <div className="sign-up-container">
    <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button buttonType='' type="submit">
            Sign In
          </Button>
          <Button buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
