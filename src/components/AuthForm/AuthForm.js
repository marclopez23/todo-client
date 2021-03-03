import React, { useState } from "react";

const AuthForm = ({ btnTxt, onSubmit }) => {
  const [info, setInfo] = useState({ email: "", password: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(info);
    setInfo({ email: "", password: "" });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((state) => ({
      ...state,
      [name]: value,
    }));
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={info.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Passwword</label>
      <input
        type="password"
        name="password"
        id="password"
        value={info.password}
        onChange={handleChange}
      />
      <input type="submit" value={btnTxt} />
    </form>
  );
};

export default AuthForm;
