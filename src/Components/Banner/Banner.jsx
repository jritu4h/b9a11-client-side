
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from '../../assets/banner/aaron-doucett-HkbeLxOJlqk-unsplash.jpg'
import Banner2 from '../../assets/banner/elissa-garcia-MV1l4f_f1os-unsplash.jpg'
import Banner3 from '../../assets/banner/roman-synkevych-5wJ2GiYSifA-unsplash.jpg'

const Banner = () => {
  return (
    <div className='z-0'>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Banner1} alt="" style={{ width: '100%', height: '500px' }} />

        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="" style={{ width: '100%', height: '500px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt="" style={{ width: '100%', height: '500px' }} />
        </SwiperSlide>
      </Swiper>
    
      </div>
      );
};

      export default Banner;