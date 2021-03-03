import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { login } from "../../services/auth.services";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { setUser } = useAuth();
  const loginHandler = async (user) => {
    try {
      const { data } = await login(user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser({ user: data.user });
      console.log("logged");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main>
      <AuthForm btnTxt="Login" onSubmit={loginHandler} />
    </main>
  );
};

export default Login;
