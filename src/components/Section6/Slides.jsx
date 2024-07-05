import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const slidesData = [
    {image: 'photo1.webp', text: 'Cerro La Overa, entrada a Contrafuerte'},
    {image: 'photo2.webp', text: 'Cordón Caulle con vista a las Torres del Huishue'},
    {image: 'photo3.webp', text: 'Trekking termal'},
    {image: 'photo4.webp', text: 'Colada de lava Cordón Caulle y Volcán Puyehue'},
    {image: 'video1.mp4', text: 'SALTOS DEL RÍO CONTRAFUERTE'},
    {image: 'photo6.webp', text: 'Saltos del rÍo contrafuerte'},
    {image: 'photo7.webp', text: 'BOSQUE GRIS'},
    {image: 'video2.mp4', text: 'CASCADA termal'},
    {image: 'photo9.webp', text: 'TREKKING POR BOSQUE GRIS'},
    {image: 'photo10.webp', text: 'Volcán Puyehue'},
    {image: 'video3.mp4', text: 'Cráter año 2011 Cordón Caulle'},
    {image: 'photo12.webp', text: 'CORDÓN CAULLE'},
    {image: 'photo13.webp', text: 'crÁter 2011 cordÓn caulle'},
    {image: 'video4.mp4', text: 'Complejo volcánico Puyehue-Cordón Caulle'},
    {image: 'photo15.webp', text: 'cráter Volcán Puyehue'},
];

const buttonStyle = {
    width: '50px',
    height: '50px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
};

const nextButtonStyle = {
    ...buttonStyle,
    backgroundImage: 'url("/right.svg")',
};

const prevButtonStyle = {
    ...buttonStyle,
    backgroundImage: 'url("/left.svg")',
};


const Slides = () => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                slidesPerView={3}
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex justify-center overflow-y-hidden h-[606px]'>
                            {
                                slide.image.includes('photo')
                                    ? <img src={slide.image} className='w-[363px] h-[606px]' alt="fotografía paisaje" />
                                    : <video src={slide.image} className='w-[363px]' autoPlay loop muted></video>
                            }
                        </div>
                        <div className='flex justify-center pt-3 pb-10'>
                            <p className='text-[#494949] text-[1.3rem] uppercase font-semibold max-w-[363px] text-center'>{slide.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-next" style={nextButtonStyle}></div>
                <div className="swiper-button-prev" style={prevButtonStyle}></div>
            </Swiper>
        </>
    );
};

export default Slides;