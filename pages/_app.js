import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { AuthProvider } from "../context/AuthContext";
import { ContentProvider } from "../context/ContentContext";

import Global from "../styles/Global";
import defaultTheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ContentProvider>
        <content>
          <ThemeProvider theme={defaultTheme}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <Global />
          </ThemeProvider>
        </content>
      </ContentProvider>
    </AuthProvider>
  );
}

export default MyApp;
