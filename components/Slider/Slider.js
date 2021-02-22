// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

function Slider({ data, autoplay }) {
  return (
    <div>
      <Swiper loop={true} slidesPerView={1} autoplay={autoplay}>
        {data.map((e) => (
          <SwiperSlide key={e.id}>
            <img src={e.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
