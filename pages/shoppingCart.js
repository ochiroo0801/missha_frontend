import { useContext } from "react";
import Head from "next/head";
import ContentContext from "../context/ContentContext";
import Div, { Empty, Cart } from "./Styles/shoppingCart_style";
import { fromImageToUrl } from "../utils/urls";
import { Link } from "@material-ui/core";
import Wrapper from "../styles/Wrapper";

function shoppingCart() {
  const { products, handleRemoveCart } = useContext(ContentContext);
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
                      <div className="total">{e.price} Kč</div>
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
