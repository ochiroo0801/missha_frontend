import { useContext } from "react";
import CounterInput from "react-counter-input";
import Head from "next/head";
import ShopContext from "../context/ShopContext";
import Div, { Empty, Cart } from "./Styles/shoppingCart_style";
import { fromImageToUrl } from "../utils/urls";
import { Link } from "@material-ui/core";
import Wrapper from "../styles/Wrapper";

function shoppingCart() {
  const {
    products,
    handleRemoveCart,
    totalPrice,
    count,
    setCount,
  } = useContext(ShopContext);

  console.log(count);

  return (
    <div>
      <Head>
        <title>Таны сагс</title>
        <meta name="description" content="Description in the basket" />
      </Head>

      <Wrapper>
        <Div>
          {products?.length === 0 ? (
            <Empty>
              <img
                src="https://image.freepik.com/free-vector/purchase-ban-online-store-website-error-cancel-buying-order-placing-inability-buy-limit-budget-line-online-buyer-cartoon-character_335657-1173.jpg"
                alt="Empty"
              />
              <h2>Таны сагс хоосон байна</h2>
              <p>
                Та хүссэн бараагаа сагсандаа хийн онлайнаар худалдан авалтаа
                хийж, гэртээ хүргүүлэн авах боломжтой, бэлэн бараа 24 цагийн
                дотор хүргэгдэнэ
              </p>
            </Empty>
          ) : (
            <Cart>
              <h1>{totalPrice}</h1>
              {products?.map((e) => (
                <div className="cartItem" key={e.id}>
                  <div className="product_info">
                    <Link href={e.slug}>
                      <div className="image">
                        <img src={fromImageToUrl(e.image)} alt="" />
                      </div>
                    </Link>

                    <div className="content">
                      <div className="info">
                        <p>{e.brand}</p>
                        <p>{e.name}</p>
                        <p>{e.size} ml</p>
                      </div>
                      <div className="total">
                        <p>{e.price} Kč</p>

                        <CounterInput
                          min={1}
                          max={10}
                          onCountChange={(count) => console.log(count)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="tools">
                    <Link href="/shoppingCart" onClick={handleRemoveCart}>
                      <p>Устгах</p>
                    </Link>
                    <p>Хадгалах</p>
                  </div>
                </div>
              ))}
            </Cart>
          )}
        </Div>
      </Wrapper>
    </div>
  );
}

export default shoppingCart;
