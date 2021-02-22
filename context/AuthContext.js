import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const localToken = localStorage.getItem("user_jwt");

    async function fetchUser() {
      try {
        if (localToken) {
          const res = await fetch(
            `https://eu-shop.herokuapp.com/auth/google/callback?access_token=${userId}`
          );
          const data = await res.json();
          setToken(localToken);
          setUser(data.user);
        }

        if (router.query.access_token) {
          router.push("/");
          const accessToken = router.query.access_token;
          const res = await fetch(
            `https://eu-shop.herokuapp.com/auth/google/callback?access_token=${accessToken}`
          );
          const getUser = await res.json();
          setUser(getUser.user);
          setToken(getUser.jwt);

          localStorage.setItem("userId", accessToken);
          localStorage.setItem("user_jwt", getUser.jwt);
        }
      } catch (err) {
        setUser(null);
        setToken(null);
      }
    }
    fetchUser();
  }, [router.query.access_token]);

  const handleSocialLogin = async (provider) => {
    try {
      const href = `${process.env.NEXT_PUBLIC_SOCIAL_AUTH}${provider}`;
      router.push(href);
    } catch (err) {}
  };

  // Sets the user to null
  const logoutUser = async () => {
    try {
      localStorage.removeItem("userId");
      localStorage.removeItem("user_jwt");
      setUser(null);
      router.push("/");
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

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logoutUser,
        handleSocialLogin,
        token,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
