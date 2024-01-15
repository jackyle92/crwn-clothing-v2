import { useState } from "react";
import "./sign-in-form.style.scss";

import FormInput from "../input-form/input-form.component.jsx";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("what happened");

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(response);
      resetFormFields();
    } catch (e) {}
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account.</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button button_type="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
