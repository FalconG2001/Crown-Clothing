import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import { SigInContainer } from "./sign-in-form.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import { UserContext } from "../contexts/user.context";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser }: any = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
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
    <SigInContainer>
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
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </SigInContainer>
  );
};

export default SignInForm;
