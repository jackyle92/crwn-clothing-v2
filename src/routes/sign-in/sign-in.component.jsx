import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoolgeUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <p>This is the sign in page</p>
      <button onClick={logGoolgeUser}>Log Google Account</button>
    </div>
  );
};

export default SignIn;
