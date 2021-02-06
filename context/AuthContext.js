import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

import { MAGIC_PUBIC_KEY } from "../utils/urls";

let magic;

const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const router = useRouter();

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
  const loginFacebook = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "google",
        redirectURI:
          "https://auth.magic.link/v1/oauth2/RhJpU8aipj7H0-kH5W6Z48hRsWdGdIKGZxyF5pNVAG4=/callback",
      });
      const result = await magic.oauth.getRedirectResult();
      // setUser(result);
      console.log(result);
    } catch (err) {}
  };

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

  useEffect(() => {
    magic = new Magic(MAGIC_PUBIC_KEY);
    // magic = new Magic(MAGIC_PUBIC_KEY, {
    //   extensions: [new OAuthExtension()],
    // });
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        logoutUser,
        getToken,
        loginFacebook,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
