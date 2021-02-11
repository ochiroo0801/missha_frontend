import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { AuthProvider } from "../context/AuthContext";
import { ShopProvider } from "../context/ShopContext";

import Global from "../styles/Global";
import defaultTheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ShopProvider>
        <content>
          <ThemeProvider theme={defaultTheme}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <Global />
          </ThemeProvider>
        </content>
      </ShopProvider>
    </AuthProvider>
  );
}

export default MyApp;
