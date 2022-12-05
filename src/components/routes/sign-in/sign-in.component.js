import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form.component";
import Button from "../../button/button.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // eslint-disable-next-line no-unused-vars
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Button onClick={logGoogleUser} buttonType='google'>Sign in with Google</Button>
      {/*<button onClick={logGoogleUser}>Sign in with Google Popup</button>*/}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
