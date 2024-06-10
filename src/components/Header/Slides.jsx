import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './style.css';


const slides = [
    { image: "bg-[url('/header1.webp')]", textClass: 'text-[#75B7D1] font-radwave title'},
    { image: "bg-[url('/header2.webp')]", textClass: 'text-[#75B7D1] font-radwave title'},
    

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
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    slideToClickedSlide={true}
                    slidesPerView={1}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={"relative h-screen w-screen container-image-mobile lg:container-image " + slide.image}>
                                <div className="absolute top-[25%] lg:top-[40%] left-0 z-10 px-10">
                                    <p className="text-white pt-4 text-lg uppercase">Rincón donde la tierra misma te abraza y te renueva.</p>
                                    <div className="">
                                        <h2 className="font-radwave text-transparent stroke-1px-white title">Naturaleza</h2>
                                        <h2 className="font-radwave text-transparent stroke-1px-white title">simplemente</h2>
                                        <h2 className={slide.textClass}>poderosa</h2>
                                    </div>
                                    <button className="bg-white rounded-full px-6 flex text-xl items-center gap-x-2 py-2 mt-2 uppercase">Explora
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 13L4 11L16 11L10.5 5.50004L11.92 4.08004L19.84 12L11.92 19.92L10.5 18.5L16 13L4 13Z" fill="black"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-10 z-10 hidden lg:visible">
                                    <img className="max-w-[40vw]" src="./map.png" alt="Mapa" />
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