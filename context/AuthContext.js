import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const router = useRouter();

  // Sets the user to null
  const logoutUser = async () => {
    try {
      await magic.user.logout();
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
