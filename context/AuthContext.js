import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase";

import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

import { MAGIC_KEY } from "../utils/urls";

let magic;

const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [magic, setMagic] = useState(null);
  const [token, setToken] = useState(null);

  const router = useRouter();

  const handleLogin = (loginMethod) => {
    // loginFacebook("facebook");

    auth
      .signInWithPopup(loginMethod)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;

        setToken(token);
        setUser(user);
        router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  /**
   * Adds email to user
   * @param {string} email
   */
  const loginUser = async (email) => {
    try {
      await magic.auth.loginWithMagicLink({ email });
      setUser({ email });
      router.push("/");
    } catch (err) {
      setUser(null);
    }
  };

  /**
   * Sets the user to null
   */
  const logoutUser = async () => {
    try {
      await magic.user.logout();
      setUser(null);
      router.push("/");
    } catch (err) {}
  };

  // Login User FaceBook
  async function loginFacebook(provider) {
    await magic.oauth.loginWithRedirect({
      provider,
      redirectURI: `${process.env.NEXT_PUBLIC_MAGIC_URL}/callback`,
    });
    const result = await magic.oauth.getRedirectResult();
    // setUser(result);
    console.log(result);
  }

  const checkUserLoggedIn = async () => {
    try {
      const isLoggedIn = await magic.user.isLoggedIn();

      if (isLoggedIn) {
        const { email } = await magic.user.getMetadata();
        setUser(email);
      }
    } catch (err) {}
  };

  const getToken = async () => {
    try {
      const token = await magic.user.getIdToken();

      return token;
    } catch (err) {}
  };

  // useEffect(() => {
  //   // !magic &&
  //   //   setMagic(
  //   //     new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
  //   //       extensions: [new OAuthExtension()],
  //   //     })
  //   //   );
  //   // magic?.preload();
  //   // checkUserLoggedIn();
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        logoutUser,
        getToken,
        loginFacebook,
        handleLogin,
        token,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
