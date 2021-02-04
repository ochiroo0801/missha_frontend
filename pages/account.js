import Head from "next/head";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { API_URL } from "../utils/urls";

const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          setLoading(true);
          const token = await getToken();
          // const token = await user.refreshToken;
          const order_res = await fetch(`${API_URL}/orders`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await order_res.json();
          setOrders(data);
        } catch (err) {
          setOrders([]);
        }
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user]);

  return { orders, loading };
};

function Account() {
  const { googlelogoutUser, user, getToken } = useContext(AuthContext);

  const { orders, loading } = useOrders(user, getToken);

  if (!user) {
    return (
      <div>
        <p>Please login or register</p>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    );
  }

  console.log(orders);

  return (
    <div>
      <Head>
        <title>Account page</title>
        <meta name="description" content="The account page, view your order" />
      </Head>
      <h2>Account page</h2>

      <h3>Your Orders</h3>
      {loading && <h3>Loading...</h3>}
      {orders.map((e) => (
        <div key={e.id}>
          {new Date(e.created_at).toLocaleDateString("eu-Eu")}
          {e.product.name} {e.product.price} Kč {e.status}
        </div>
      ))}
      <hr />
      <p>Logged in as: {user.email}</p>
      <a href="#" onClick={googlelogoutUser}>
        Logout
      </a>
    </div>
  );
}

export default Account;
