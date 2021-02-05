import { useState, useContext } from "react";
import Head from "next/head";
import AuthContext from "../context/AuthContext";
import Div from "./Styles/login_style";

function login() {
  const { loginUser, loginFacebook } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email);
  };

  const handleLoginFacebook = () => {
    loginFacebook();
  };

  return (
    <Div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login her to make your purchase" />
      </Head>

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email Address"
        />
        <button className="button" type="submit">
          Login
        </button>
      </form>

      <button onClick={handleLoginFacebook}>Google</button>
    </Div>
  );
}

export default login;
