import Head from "next/head";
import { Button } from "@material-ui/core";

import { MdDeleteForever } from "react-icons/md";
import { BsBoxArrowLeft } from "react-icons/bs";
import Div, {
  Empty,
  Cart,
  Checkout_Products,
  Checkout_Method,
} from "./Styles/basket_style";
import Wrapper from "../styles/Wrapper";
import BuyButton from "../components/BuyButton/BuyButton";
import Quantity from "../components/Quantity";
import { useCart } from "../context/cart/use_cart";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

function Basket() {
  const {
    items,
    clearCart,
    calculatePrice,
    calculateSubTotalPrice,
  } = useCart();

  const handleEmptyBasket = (e) => {
    clearCart(e);
  };

  return (
    <div>
      <Head>
        <title>Таны сагс</title>
        <meta name="description" content="Description in the basket" />
      </Head>

      <div>
        {items?.length === 0 ? (
          <Empty>
            <img
              src="https://image.freepik.com/free-vector/purchase-ban-online-store-website-error-cancel-buying-order-placing-inability-buy-limit-budget-line-online-buyer-cartoon-character_335657-1173.jpg"
              alt="Empty"
            />
            <h2>Таны сагс хоосон байна</h2>
            <p>
              Та хүссэн бараагаа сагсандаа хийн онлайнаар худалдан авалтаа хийж,
              гэртээ хүргүүлэн авах боломжтой, бэлэн бараа 24 цагийн дотор
              хүргэгдэнэ
            </p>
          </Empty>
        ) : (
          <Div>
            <Wrapper>
              <motion.div variants={container} initial="hidden" animate="show">
                <Cart>
                  <Checkout_Products>
                    <h3>Сагс</h3>
                    <Button
                      variant="contained"
                      startIcon={<MdDeleteForever />}
                      color="secondary"
                      size="small"
                      className="tools"
                      onClick={() => handleEmptyBasket(items)}
                    >
                      <p>Сагсыг хоослох</p>
                      {/* <Link href="/shoppingCart">
                    </Link> */}
                    </Button>
                    {items.map((e) => (
                      <motion.div variants={item}>
                        <Quantity key={e.id} data={e} />
                      </motion.div>
                    ))}
                  </Checkout_Products>

                  <Checkout_Method>
                    <h3>Захиалга</h3>
                    <div className="container">
                      <h1>{calculatePrice(items)}</h1>
                      {/* <BuyButton product={products} /> */}
                    </div>
                  </Checkout_Method>
                </Cart>
              </motion.div>

              <Button startIcon={<BsBoxArrowLeft />}>Буцах</Button>
            </Wrapper>
          </Div>
        )}
      </div>
    </div>
  );
}

export default Basket;
