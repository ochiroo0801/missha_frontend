import { useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

import AuthContext from "../context/AuthContext";

import Div, { Wrap } from "./Styles/login_style";
import { API_URL, fromImageToUrl } from "../utils/urls";
import Wrapper from "../styles/Wrapper";

function login({ data }) {
  const { loginUser, handleLogin, user, handleLoginSocial } = useContext(
    AuthContext
  );
  const [email, setEmail] = useState("");
  const { title, label, placeholder, text, background, button } = data;
  const bg = fromImageToUrl(background[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email);
  };

  return (
    <Div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Login her to make your purchase" />
      </Head>
      <Wrapper>
        <Wrap>
          <div className="image">
            <img src={bg} alt="" />
          </div>
          <div className="formSection">
            <h2>{title}</h2>
            <div className="buttons">
              <Link href={process.env.NEXT_PUBLIC_FACEBOOK_AUTH}>
                <Button
                  variant="contained"
                  startIcon={<FaFacebookF />}
                  color="primary"
                >
                  Facebook
                </Button>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_GOOGLE_AUTH}>
                <Button
                  variant="contained"
                  startIcon={<FaGooglePlusG />}
                  color="secondary"
                >
                  Google
                </Button>
              </Link>
            </div>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField
                className="input"
                fullWidth={true}
                color="secondary"
                multiline
                id="outlined-secondary"
                label={label}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={placeholder}
              />

              <button className="button" type="submit">
                {button}
              </button>
            </form>
            <p>{text}</p>
          </div>
        </Wrap>
      </Wrapper>
    </Div>
  );
}

export async function getStaticProps() {
  // Login
  const res = await fetch(`${API_URL}/login`);
  const data = await res.json();

  // Return the products as props
  return {
    props: {
      data,
    },
  };
}

export default login;
