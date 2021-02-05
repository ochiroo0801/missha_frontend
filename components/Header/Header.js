import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "../../context/AuthContext";
// ICONS
import { BsSearch, BsFillHeartFill, BsGear } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

import Top, { Main } from "./headerStyle";
import Wrapper from "../../styles/Wrapper";
import { Button } from "@material-ui/core";

function Header() {
  const { user } = useContext(AuthContext);

  const router = useRouter();
  const isHome = router.pathname === "/";

  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <>
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
                  <Link href="/">Home</Link>
                </Button>
                <Button>
                  <Link href="/shop">Shop</Link>
                </Button>
                <Button>Products</Button>
                <Button>Event</Button>
              </ul>
            </div>
            <div className="tools">
              <div className="item">
                <BsSearch />
              </div>
              <div className="item">
                <BsGear />
              </div>
              <div className="item">
                <AiOutlineShoppingCart />
              </div>
            </div>
          </div>
        </Main>
      </Wrapper>
    </>
  );
}

export default Header;