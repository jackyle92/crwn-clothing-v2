import { useState } from "react";
import "./sign-up-form.style.scss";

import FormInput from "../input-form/input-form.component.jsx";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils.js";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log("user: ", user);
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Can not create user, email already in use");
      } else {
        console.log(e);
      }
      console.log("user creation encountered an error", e);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account.</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></FormInput>
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>
        <Button children="Sign up" button_type="google" type="submit"></Button>
      </form>
    </div>
  );
};

export default SignUpForm;
