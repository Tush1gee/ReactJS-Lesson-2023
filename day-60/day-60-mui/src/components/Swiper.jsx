// import images from "../data/images"
// import {Swiper, SwiperSlide} from "swiper/react"
// import { useRef, useState } from "react";

// const SwiperUI = () => {
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);
//     const swiperRef = useRef(null);
    
//         const slides = images.map((image) => {
//             return (
//                 <SwiperSlide>
//                     <img src={image.url} alt="slider"/>
//                 </SwiperSlide>
//             )
//         })

//         return (
//             <div>
//                 <Swiper 
//                     spaceBetween={50}
//                     slidesPerView={1}
//                     onSlideChange={() => console.log('slide change')}
//                     thumbs={{swiper: thumbsSwiper}} >
//                         {slides}
//                 </Swiper>
//                 <Swiper 
//                     spaceBetween={50}
//                     slidesPerView={1}
//                     onSlideChange={() => console.log('slide change')}
//                     onSwiper={setThumbsSwiper}>
//                         {slides}
//                 </Swiper>
//             </div>
//         )
// }

// export {SwiperUI}