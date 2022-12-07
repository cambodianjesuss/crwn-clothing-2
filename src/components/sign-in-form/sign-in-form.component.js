import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const SignInForm = ({logGoogleUser})=>{
  return (
    <div>
      <h1>Sign In</h1>
      <FormInput 
        label="Email"
        type="email"
        required
        name="email"
        value
      />
      <FormInput 
        label="Password"
        type="password"
        required
        name="password"
        value
      />
      <Button>Sign in</Button>
      <Button onClick={logGoogleUser} buttonType='google'>Sign in with Google</Button>
    </div>
  )
}

export default SignInForm;