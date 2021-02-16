import { useContext } from "react";
import Head from "next/head";
import { Button, Link } from "@material-ui/core";

import { MdDeleteForever } from "react-icons/md";
import { BsBoxArrowLeft } from "react-icons/bs";

import ShopContext from "../context/ShopContext";
import Div, {
  Empty,
  Cart,
  Checkout_Products,
  Checkout_Method,
} from "./Styles/shoppingCart_style";
import Wrapper from "../styles/Wrapper";
import BuyButton from "../components/BuyButton/BuyButton";
import Quantity from "../components/Quantity";

function shoppingCart() {
  const { handleRemoveCart, products, totalPrice } = useContext(ShopContext);

  return (
    <div>
      <Head>
        <title>Таны сагс</title>
        <meta name="description" content="Description in the basket" />
      </Head>

      <div>
        {products?.length === 0 ? (
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
              <Cart>
                <Checkout_Products>
                  <h3>Сагс</h3>
                  <Button
                    variant="contained"
                    startIcon={<MdDeleteForever />}
                    color="secondary"
                    size="small"
                    className="tools"
                  >
                    <Link href="/shoppingCart" onClick={handleRemoveCart}>
                      <p>Сагсыг хоослох</p>
                    </Link>
                  </Button>
                  {products.map((e) => (
                    <Quantity data={e} />
                  ))}

                  <Button startIcon={<BsBoxArrowLeft />}>Буцах</Button>
                </Checkout_Products>

                <Checkout_Method>
                  <h3>Захиалга</h3>
                  <div className="container">
                    <h1>{totalPrice}</h1>
                    <BuyButton product={products} />
                  </div>
                </Checkout_Method>
              </Cart>
            </Wrapper>
          </Div>
        )}
      </div>
    </div>
  );
}

export default shoppingCart;
