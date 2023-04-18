import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

// import { UserContext } from "../contexts/user.context";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithAuthUserEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser }: any = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response: any = await signInWithAuthUserEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(response.user);
      resetFormFields();
    } catch (err: any) {
      if (err.code === "auth/wrong-password") {
        alert("Incorrect Password");
      } else if (err.code === "auth/user-not-found") {
        alert("Your email-id is not registered! Please sign up!!!");
      } else {
        console.log(err.message);
      }
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email!</span>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormInput
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
