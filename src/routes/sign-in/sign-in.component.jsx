import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  //   if (response) {
  //     const userDocRef = await createUserDocFromAuth(response.user);
  //   }
  // }, []);

  const logGoolgeUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log("userDocRef: ", userDocRef);
  };

  /*
   * Sign in with redirect
   */
  // const logGoogleWithRedirect = async () => {
  //   const response = await signInWithGoogleRedirect();
  //   console.log(response);
  // };
  return (
    <div>
      <p>This is the sign in page</p>
      <button onClick={logGoolgeUser}>Log In Google Account</button>
      {/* <button onClick={logGoogleWithRedirect}>Sign in with redirect</button> */}
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
