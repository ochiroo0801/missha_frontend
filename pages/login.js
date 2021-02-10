import { useState, useContext } from "react";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";

import AuthContext from "../context/AuthContext";
import Div, { Wrap } from "./Styles/login_style";
import { API_URL, fromImageToUrl } from "../utils/urls";
import Wrapper from "../styles/Wrapper";
import { Button } from "@material-ui/core";

function login({ data }) {
  const { loginUser, loginFacebook } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const { title, label, placeholder, text, background, button } = data;
  const bg = fromImageToUrl(background[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email);
  };

  const handleLoginFacebook = (event) => {
    event.preventDefault();
    loginFacebook("facebook");
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

          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <h2>{title}</h2>

            <Button onClick={handleLoginFacebook}>Facebook</Button>
            <Button>Instagram</Button>

            <p>эсвэл</p>

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
            <p>{text}</p>
          </form>
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
