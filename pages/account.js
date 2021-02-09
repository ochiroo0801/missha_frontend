import { useContext, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaBoxOpen, FaUserCog, FaCreditCard } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import AuthContext from "../context/AuthContext";
import { API_URL } from "../utils/urls";

import Div from "./Styles/account.style";
import Wrapper from "../styles/Wrapper";
import { Button } from "@material-ui/core";

const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          setLoading(true);
          const token = await getToken();
          console.log(token);
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

const items = [
  {
    id: 1,
    icon: <FaBoxOpen />,
    link_name: "Захиалгууд",
    link_url: "/",
  },
  {
    id: 2,
    icon: <FaUserCog />,
    link_name: "Хувийн мэдээлэл",
    link_url: "/",
  },
  {
    id: 3,
    icon: <FaCreditCard />,
    link_name: "Купон",
    link_url: "/",
  },
  {
    id: 4,
    icon: <BiSupport />,
    link_name: "Тусламж",
    link_url: "/",
  },
];

function Account() {
  const { logoutUser, user, getToken } = useContext(AuthContext);

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

  return (
    <Wrapper>
      <Head>
        <title>Account page</title>
        <meta name="description" content="The account page, view your order" />
      </Head>

      <Div>
        <div className="profile">
          <div className="image"></div>
          <div className="name">
            <p>{user}</p>
          </div>
          <div className="email">
            <p>{user}</p>
          </div>

          <div className="menu">
            {items.map((e) => (
              <div key={e.id} className="item">
                <div className="menu_icon">{e.icon}</div>
                <div className="menu_name">{e.link_name}</div>
              </div>
            ))}
          </div>

          <Button className="logout" href="#" onClick={logoutUser}>
            гарах
          </Button>
        </div>
        <div className="tabs"></div>
      </Div>

      <h3>Your Orders</h3>
      {/* {loading && <h3>Loading...</h3>}
      {orders
        ? orders.map((e) => (
            <div key={e.id}>
              <div>
                <img src={API_URL + e.product.image.url} alt="" />
              </div>
              {new Date(e.createdAt).toLocaleDateString("eu-Eu")}
              {e.product.name} {e.product.price} Kč {e.status}
            </div>
          ))
        : null} */}
    </Wrapper>
  );
}

export default Account;
