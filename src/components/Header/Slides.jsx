import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './style.css';


const slidesData = [
    { image: "bg-[url('/header1.jpg')]", textClass: 'text-[#75B7D1] font-radwave title'},
    { image: "bg-[url('/header2.webp')]", textClass: 'text-[#D02042] font-radwave title'},
    { image: "bg-[url('/header3.jpg')]", textClass: 'text-[#86B7DC] font-radwave title'},
    { image: "bg-[url('/header4.jpg')]", textClass: 'text-[#83A327] font-radwave title'},
    { image: "bg-[url('/header5.jpg')]", textClass: 'text-[#516135] font-radwave title'},
    { image: "bg-[url('/header6.jpg')]", textClass: 'text-[#CDB7A2] font-radwave title'}
];


const Slides = () => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                slideToClickedSlide={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                effect="fade"
                modules={[Autoplay, EffectFade]}
                slidesPerView={1}
                allowTouchMove={false}
                speed={1000}
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={"h-screen w-screen container-image-mobile lg:container-image " + slide.image + " bg-no-repeat bg-cover"}>
                            <div className="absolute top-[35vh] title-header sm:top-[30vh] lg:top-[40%] left-0 z-10 px-geo">
                                <p className="text-white pt-4 text-sm lg:text-lg uppercase">Rincón donde la tierra misma te abraza y te renueva.</p>
                                <div className="">
                                    <h2 className="font-radwave text-transparent stroke-1px-white leading-10 sm:leading-[60px] text-[1.8rem] sm:text-[2.8rem] lg:text-[3.8rem]">Naturaleza</h2>
                                    <h2 className="font-radwave text-transparent stroke-1px-white leading-10 sm:leading-[60px] text-[1.8rem] sm:text-[2.8rem] lg:text-[3.8rem]">simplemente</h2>
                                    <h2 className={slide.textClass + 'leading-10 sm:leading-[60px] text-[1.8rem] sm:text-[2.8rem] lg:text-[3.8rem]'}>poderosa</h2>
                                </div>
                                <button className="bg-white rounded-full px-4 lg:px-6 flex items-center gap-x-2 py-2 mtlg:py-2 mt-2 uppercase text-xs lg:text-xl" onClick={() => document.getElementById('img-section1').scrollIntoView({ behavior: 'smooth' })}>Explora
                                    <svg className="w-[18px] lg:w-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 13L4 11L16 11L10.5 5.50004L11.92 4.08004L19.84 12L11.92 19.92L10.5 18.5L16 13L4 13Z" fill="black"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute top-10 lg:top-1/2 right-0 transform translate-y-1/4 lg:-translate-y-1/2 px-geo z-10">
                                <img className="max-w-[30vw] min-w-[200px] map-img-h md:w-[500px] 2xl:w-[600px]"  src="./map.png" alt="Mapa" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
};

export default Slides;