import { useState, useContext } from "react";
import Head from "next/head";
import AuthContext from "../context/AuthContext";
import Div from "./Styles/login_style";
import { auth, provider } from "../firebase";

function login() {
  const { loginUser, googleUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email);
  };

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        googleUser(result);
        console.log(result.user.refreshToken);
      })
      .catch((error) => alert(error.message));
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

      <button onClick={signIn}>Google</button>
    </Div>
  );
}

export default login;
