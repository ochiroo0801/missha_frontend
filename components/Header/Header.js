import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "../../context/AuthContext";
// ICONS
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

import Top, { Main, Div } from "./headerStyle";
import Wrapper from "../../styles/Wrapper";
import { Badge, Button, IconButton } from "@material-ui/core";
import ShopContext from "../../context/ShopContext";

function Header() {
  const { user } = useContext(AuthContext);
  const { products } = useContext(ShopContext);

  const router = useRouter();
  const isHome = router.pathname === "/";

  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  const defaultProps = {
    color: "secondary",
    children: <AiOutlineShoppingCart />,
  };

  return (
    <Div style={{ zIndex: "100" }}>
      <Top>
        <Wrapper>
          <div className="container">
            <div className="frontSide">
              <p>MISSHA-д тавтай морилно уу</p>
              <p>+420 999 888 777</p>
            </div>
            <div className="backSide">
              <div className="item">
                <Button startIcon={<BsFillHeartFill className="icon" />}>
                  <p>Wishlist</p>
                </Button>
              </div>
              <div className="item">
                <p>
                  {user ? (
                    <Link href="/account">
                      {user.email ? <a>{user.email}</a> : <a>{user}</a>}
                    </Link>
                  ) : (
                    <Link href="/login">
                      <Button startIcon={<FaUser className="icon" />}>
                        <p>Нэвтрэх</p>
                      </Button>
                    </Link>
                  )}
                </p>
              </div>
              <div className="item">
                <Link href="/shoppingCart">
                  <IconButton className="icon_basket" aria-label="cart">
                    <Badge badgeContent={products.length} {...defaultProps} />
                  </IconButton>
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </Top>
      <Wrapper>
        <Main>
          <div className="frontSide">
            <div className="burgerMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="logo">
              <Link href="/">
                <a>
                  <h1>LOGO</h1>
                </a>
              </Link>
            </div>
          </div>
          <div className="backSide">
            <div className="menu">
              <ul>
                <Button>
                  <Link href="/">Нүүр</Link>
                </Button>
                <Button>
                  <Link href="/shop">дэлгүүр</Link>
                </Button>
                <Button>
                  <Link href="/makeup">гоо сайхан</Link>
                </Button>
                <Button>
                  <Link href="/crystal">болор эдлэл</Link>
                </Button>
                <Button>
                  <Link href="/kitchen">гал тогоо</Link>
                </Button>
              </ul>
            </div>
          </div>
        </Main>
      </Wrapper>
    </Div>
  );
}

export default Header;
