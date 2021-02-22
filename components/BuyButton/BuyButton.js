import { useContext } from "react";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

import AuthContext from "../../context/AuthContext";
import { STRIPE_PK, API_URL } from "../../utils/urls";
import Div from "./buybuttonStyle";
import { Button } from "@material-ui/core";

const stripePromise = loadStripe(STRIPE_PK);

function BuyButton({ product }) {
  const { user, token } = useContext(AuthContext);
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/login");
  };

  const handleBuy = async () => {
    const stripe = await stripePromise;

    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const session = await res.json();
    console.log("session", session);

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <div>
      {!user && (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={redirectToLogin}
            className="buy"
          >
            Нэвтрэх
          </Button>
        </div>
      )}
      {user && (
        <div>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleBuy}
            className="buy"
          >
            худалдан авах
          </Button>
        </div>
      )}
    </div>
  );
}

export default BuyButton;
