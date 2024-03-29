import "./testimonials.css"
import lucho from "../../assets/lucho.jpg"
import faith from "../../assets/IMG-20230916-WA0096.jpg"


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  let reviews = [{
  name : "lucho",
  img : lucho,
  paragraph :"agustine john es un increíble desarrollador front-end."
   },
   {
    name : "Faith akpan",
    img : faith,
    paragraph :"Augustine john he is an awesome front-end  developer."
     }
  ]
  return (
    <section >
      <h5 >Review from partners</h5>
      <h2 >Testimonials</h2>
      <Swiper  className="container testimony_container"   modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {reviews.map(({name,img,paragraph},index)=>{
          return (
            <SwiperSlide className="testimonial" key={index}>
          <div className="partner_avatar">
            <img src={img} alt="" />
          </div>
          <h5 className="partner_name">{name}</h5>
            <small className="partner_review">{paragraph}</small>
        </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  )
}

export default Testimonials