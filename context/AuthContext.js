import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";
import { MAGIC_PUBIC_KEY } from "../utils/urls";
import { auth, authOut } from "../firebase";

const AuthContext = createContext();

let magic;

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

  // Google login
  const googleUser = async (name) => {
    try {
      setUser(name);
      router.push("/");
    } catch (err) {
      setUser(null);
    }
  };

  const googlelogoutUser = async () => {
    authOut
      .then(() => {
        setUser(null);
        router.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const checkUserLoggedIn = async () => {
    try {
      const isLoggedIn = await magic.user.isLoggedIn();

      if (isLoggedIn) {
        const { email } = await magic.user.getMetadata();
        setUser({ email });

        // Just for testing
        const token = await getToken();
      }
    } catch (err) {}
  };

  const getToken = async () => {
    try {
      const token = await magic.user.getIdToken();

      console.log(token);
      return token;
    } catch (err) {}
  };

  useEffect(() => {
    magic = new Magic(MAGIC_PUBIC_KEY);

    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        googlelogoutUser,
        logoutUser,
        getToken,
        googleUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
