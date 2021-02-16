import { useContext, useEffect } from "react";
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
import { fromImageToUrl } from "../utils/urls";
import Wrapper from "../styles/Wrapper";
import BuyButton from "../components/BuyButton/BuyButton";
import Quantity from "../components/Quantity";

function shoppingCart() {
  const {
    handleRemoveCart,
    handleRemoveItem,
    products,
    totalPrice,
    setTotalPrice,
    QuantityChanger,
    handleChange,
  } = useContext(ShopContext);
  const { quantity, setQuantity } = QuantityChanger();

  console.log(quantity);

  // useEffect(() => {
  //   if (products !== []) {
  //     const price = products[0].map((e) => e.price);

  //     if (price.length !== 0) {
  //       const total = price.reduce(myFunction);
  //       function myFunction(total, value) {
  //         return total + value;
  //       }
  //       setTotalPrice(total);
  //     }
  //   }
  // }, []);

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
                  {products.map((e) => {
                    console.log(e);
                    const product = e[0];
                    const quantity = e[1];

                    return (
                      <div className="cartItem" key={product.id}>
                        <div className="product_info">
                          <Link href={`/products/${product.slug}`}>
                            <div className="image">
                              <img src={fromImageToUrl(product.image)} alt="" />
                            </div>
                          </Link>

                          <div className="content">
                            <div className="info">
                              <h5>{product.brand}</h5>
                              <h4>{product.name}</h4>
                              <p>{product.size} ml</p>
                            </div>
                            <div className="priceAndTools">
                              <h4>{product.price} Kč</h4>
                              <h3>{product.price * quantity}</h3>
                              <Quantity
                                handleChange={(e) =>
                                  handleChange(e.target.value, setQuantity)
                                }
                                width={"100%"}
                                quantity={quantity}
                              />

                              <Button
                                variant="contained"
                                startIcon={<MdDeleteForever />}
                                color="primary"
                                size="small"
                                className="tools"
                                onClick={() => handleRemoveItem(product.id)}
                              >
                                <p>Устгах</p>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

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
