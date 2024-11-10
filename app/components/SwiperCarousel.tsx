import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperCarousel: React.FC = () => {
  return (
    <section id="events-loc" >
      <h2>Past Events</h2>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="/assets/posters/1.png" alt="Event 1" /></SwiperSlide>
        <SwiperSlide><img src="/assets/posters/2.png" alt="Event 2" /></SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </section>
  );
};

export default SwiperCarousel;
