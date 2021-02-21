import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

let magic;

const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [magic, setMagic] = useState(null);

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

  // Sets the user to null
  const logoutUser = async () => {
    try {
      await magic.user.logout();
      setUser(null);
      router.push("/");
    } catch (err) {}
  };

  // Login User With Social
  async function loginSocial(provider) {
    try {
      await magic.oauth.loginWithRedirect({
        provider,
        redirectURI: `${process.env.NEXT_PUBLIC_MAGIC_URL}`,
      });
      const result = await magic.oauth.getRedirectResult();
      console.log(result);
    } catch (err) {
      setUser(null);
    }
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
  //   !magic &&
  //     setMagic(
  //       new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
  //         extensions: [new OAuthExtension()],
  //       })
  //     );
  //   magic?.preload();

  //   checkUserLoggedIn();
  // }, [magic]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        logoutUser,
        getToken,
        loginSocial,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
