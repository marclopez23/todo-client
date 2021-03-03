import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

import { signup } from "../../services/auth.services";

const Signup = () => {
  const registerHandler = async (user) => {
    try {
      const setNewUser = await signup(user);
        console.log(setNewUser);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main>
      <AuthForm btnTxt="Register" onSubmit={registerHandler} />
    </main>
  );
};

export default Signup;
