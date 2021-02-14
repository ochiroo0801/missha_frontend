import { useContext } from "react";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

import AuthContext from "../../context/AuthContext";
import { STRIPE_PK, API_URL } from "../../utils/urls";
import Div from "./buybuttonStyle";

const stripePromise = loadStripe(STRIPE_PK);

function BuyButton({ product }) {
  const { user, getToken } = useContext(AuthContext);
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/login");
  };

  console.log(product);
  console.log(user);

  const handleBuy = async () => {
    const stripe = await stripePromise;
    const token = await getToken();
    console.log(token);

    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const session = await res.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <div>
      {!user && (
        <Div>
          <button onClick={redirectToLogin} className="buy">
            Login to Buy
          </button>
        </Div>
      )}
      {user && (
        <Div>
          <button onClick={handleBuy} className="buy">
            Buy
          </button>
        </Div>
      )}
    </div>
  );
}

export default BuyButton;
