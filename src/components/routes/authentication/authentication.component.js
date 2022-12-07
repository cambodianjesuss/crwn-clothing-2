import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

import SignInForm from "../../sign-in-form/sign-in-form.component";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import Button from "../../button/button.component";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // eslint-disable-next-line no-unused-vars
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <SignInForm logGoogleUser={logGoogleUser} />
      {/*<button onClick={logGoogleUser}>Sign in with Google Popup</button>*/}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
