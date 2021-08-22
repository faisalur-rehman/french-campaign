import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import useApi from "../../hooks/useApi";
import LoginForm from "./LoginScreen";
// import * as api from "../../api/Api";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const history = useHistory();
  //   const { error, request } = useApi(api.loginUser);

  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    // try {
    //   const { data } = await request({ ...formValues });
    //   localStorage.setItem("token", data.token);
    //   history.push("/journal");
    // } catch (_) {}
  }

  return (
    <div>
      <LoginForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        error
      />
    </div>
  );
};

export default Login;
