import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './style.css';


const slides = [
    { image: '/header1.webp', textClass: 'text-[#75B7D1] font-radwave title'},

];

// =======================================================
//                  Invitados
const Slides = () => {
    const swiperRef = useRef();

    return (
        <>
            <div className="">
                <Swiper
                    effect={'coverflow'}
                    spaceBetween={0}
                    grabCursor={true}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    loop={false}
                    initialSlide={3}
                    slideToClickedSlide={true}
                    slidesPerView={1}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative container">
                                <img className="object-cover" src={slide.image} alt={`slide_${index+1}`} />
                                <div className="absolute top-[50%] left-0">
                                    <p className="text-white pt-4">Rincón donde la tierra misma te abraza y te renueva.</p>
                                    <div>
                                        <h2 className="font-radwave text-4xl text-transparent stroke-1px-white title">Naturaleza simplemente</h2>
                                        <h2 className={slide.textClass}>poderosa</h2>
                                    </div>
                                    <button className="bg-white rounded-full px-4 flex text-2xl items-center gap-x-1 py-1">Explora
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 13L4 11L16 11L10.5 5.50004L11.92 4.08004L19.84 12L11.92 19.92L10.5 18.5L16 13L4 13Z" fill="black"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
        </>
    );
};

export default Slides;