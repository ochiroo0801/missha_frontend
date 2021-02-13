import { useContext } from "react";
import Head from "next/head";
import ShopContext from "../context/ShopContext";
import Div, {
  Empty,
  Cart,
  Checkout_Products,
  Checkout_Method,
} from "./Styles/shoppingCart_style";
import { fromImageToUrl } from "../utils/urls";
import { Button, Link } from "@material-ui/core";
import Wrapper from "../styles/Wrapper";

import { MdDeleteForever } from "react-icons/md";
import { BsBoxArrowLeft } from "react-icons/bs";

function shoppingCart() {
  const { products, handleRemoveCart, totalPrice } = useContext(ShopContext);

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
                  <Button
                    variant="contained"
                    startIcon={<MdDeleteForever />}
                    color="secondary"
                    size="small"
                    className="tools"
                  >
                    <Link href="/shoppingCart" onClick={handleRemoveCart}>
                      <a>Сагсыг хоослох</a>
                    </Link>
                  </Button>
                  {products?.map((e) => (
                    <div className="cartItem" key={e.id + e.price}>
                      <div className="product_info">
                        <Link href={e.slug}>
                          <div className="image">
                            <img src={fromImageToUrl(e.image)} alt="" />
                          </div>
                        </Link>

                        <div className="content">
                          <div className="info">
                            <h5>{e.brand}</h5>
                            <h4>{e.name}</h4>
                            <p>{e.size} ml</p>
                          </div>
                          <div className="priceAndTools">
                            <p>{e.price} Kč</p>
                            <Button
                              variant="contained"
                              startIcon={<MdDeleteForever />}
                              color="primary"
                              size="small"
                              className="tools"
                            >
                              <Link href="/shoppingCart">
                                <a>Устгах</a>
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button startIcon={<BsBoxArrowLeft />}>Буцах</Button>
                </Checkout_Products>

                <Checkout_Method>
                  <h1>{totalPrice}</h1>
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
