import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import Global from "../styles/Global";

import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/cart/use_cart";

import defaultTheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <content>
          <ThemeProvider theme={defaultTheme}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <Global />
          </ThemeProvider>
        </content>
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
