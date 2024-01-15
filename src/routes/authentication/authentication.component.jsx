import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  //   if (response) {
  //     const userDocRef = await createUserDocFromAuth(response.user);
  //   }
  // }, []);

  /*
   * Sign in with redirect
   */
  // const logGoogleWithRedirect = async () => {
  //   const response = await signInWithGoogleRedirect();
  //   console.log(response);
  // };
  return (
    <div>
      <SignInForm></SignInForm>
      {/* <button onClick={logGoolgeUser}>Log In Google Account</button> */}
      {/* <button onClick={logGoogleWithRedirect}>Sign in with redirect</button> */}
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
