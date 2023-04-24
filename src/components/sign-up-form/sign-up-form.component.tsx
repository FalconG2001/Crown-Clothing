import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-up-form.styles.jsx";
import Button from "../button/button.component";

import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  // const { setCurrentUser }: any = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match!");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      resetFormFields();
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
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
    <SignUpContainer>
      <h2>Dont have an account?</h2>
      <span>Sign up with your email!</span>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          onChange={handleChange}
          value={displayName}
          required
        />

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

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
