import { Swiper, SwiperSlide } from 'swiper/react';
import  { useState } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


const slidesData = [
    {
        image: '/1.webp', detailImage: '/1-details.webp', title: 'Termas Contrafuerte', subtitle: 'La ruta Contrafuerte , es un emocionante sendero  de 14kms auto-guiado en vehículo 4x4. Los visitantes pueden llegar hasta las Termas naturales, disfrutar del bosque gris y el mirador de la cascada termal. Esta ruta permite a los excursionistas explorar a su propio ritmo, descubriendo la belleza natural y la diversidad geológica de la zona. Es ideal para aquellos que prefieren una experiencia más libre y flexible.', info: [
            { icon: '/icon-price.svg', text: 'Entrada general: <b>$12.000</b> <br>Entrada niños (5-10 años): <b>$5.000</b>' },
            { icon: '/icon-vehicle.svg', text: 'Tiempo total de caminata: <b>1,5 HRS.</b>.<br><b>DIFICULTAD BAJA</b>' },
            { icon: '/icon-calendar.svg', text: 'Temporada alta, enero, febrero, marzo y abril: <br> <b>LUNES A DOMINGO 8:30HRS a 21:00HRS</b><br><b>INGRESO SÓLO CON RESERVA</b>' },
            { icon: '/icon-restriction.svg', text: 'Pago efectivo o transferencia.<br>No se permiten mascotas.<br>No se puede hacer fogatas.<br>No se admiten motos 2 ruedas.<br>No puede dejar la basura que Ud. genere en su visita al lugar.' },
        ]
    },
    { image: '/2.webp', detailImage: '/2-details.webp', title: 'Cordón Caulle', subtitle: 'Después del sendero Contrafuerte, puedes realizar el trekking hacia el Cordón Caulle, donde se encuentra la Colada de Lava del año 2011 y fumarolas.  Este recorrido tiene un nivel de dificultad medio-alto. Garantiza una experiencia enriquecedora, permitiendo a los excursionistas recorrer 6,5 km explorando los fascinantes paisajes volcánicos.', info: [
            { icon: '/icon-price.svg', text: 'Entrada general: <b>$12.000</b>' },
            { icon: '/icon-trekking.svg', text: 'Tiempo total de caminata: <b>4,5 HRS.</b>.<br><b>DIFICULTAD MEDIA-ALTA</b>' },
            { icon: '/icon-calendar.svg', text: 'Temporada alta, enero, febrero, marzo y abril: <br> <b>LUNES A DOMINGO 8:30HRS a 21:00HRS</b><br><b>INGRESO SÓLO CON RESERVA</b>' },
            { icon: '/icon-restriction.svg', text: 'Pago efectivo o transferencia.<br>No se permiten mascotas.<br>No se puede hacer fogatas.<br>No se admiten motos 2 ruedas.<br>No puede dejar la basura que Ud. genere en su visita al lugar.' },
        ]
    },
    { image: '/3.webp', detailImage: '/3-details.webp', title: 'Geotur', subtitle: 'Es una ruta Full-day guiada por un geólogo, el Circuito se inicia a las 7:30 am en el acceso principal de Geoturismo Contrafuerte, el visitante debe recorrer 14 km de ascenso en su vehículo hasta llegar al final del camino,(km 14) donde comenzará el trekking y la travesía hacia el Cordón Caulle, pasará por los faldeos del Volcán Puyehue , los depósitos de lava volcánica del año 2011, las fumarolas , para posteriormente rodear el Cráter del Caulle del año 2011 e ir descendiendo hacia las termas naturales, culminando con un exquisito baño termal.', info: [
            { icon: '/icon-price.svg', text: '<b>$90.000</b>/ por persona : 1 persona <br> <b>$85.000</b>/ por persona : 2 personas.<br> <b>$75.000</b>/ por persona : 3 a 4 personas. (*Consultar por grupos más numerosos)<br>VALOR INCLUYE:<br>Guía especializado (Geólogo)<br>Entrada de acceso a Geoturismo Contrafuerte y Termas Naturales.' },
            { icon: '/icon-trekking.svg', text: 'Tiempo total de caminata: <b>12,5 KM / 7 HORAS.</b>.<br><b>DIFICULTAD MEDIA-ALTA</b>' },
            { icon: '/icon-calendar.svg', text: 'A realizarse sólo los meses de:<br> <b>ENERO, FEBRERO, MARZO Y ABRIL</b>' },
            { icon: '/icon-restriction.svg', text: 'Pago efectivo o transferencia.<br>No se permiten mascotas.<br>No se puede hacer fogatas.<br>No se admiten motos 2 ruedas.<br>No puede dejar la basura que Ud. genere en su visita al lugar.' },
        ]
    },
    { image: '/4.webp', detailImage: '/4-details.webp', title: 'Volcán Puyehue', subtitle: 'La travesía hacia el Volcán Puyehue parte desde el km 14 de la ruta Contrafuerte, éste es un trekking de 8,7 kms de distancia llegando a la cumbre del Volcán en 4,5 hrs de recorrido , nivel de dificultad medio-alto.', info: [
            { icon: '/icon-price.svg', text: 'Entrada general: <b>$12.000</b>' },
            { icon: '/icon-trekking.svg', text: 'Tiempo total de caminata: <b>8,7KM / 4,5 HORAS.</b>.<br><b>DIFICULTAD MEDIA-ALTA</b>' },
            { icon: '/icon-calendar.svg', text: 'Temporada alta, enero, febrero, marzo y abril: <br> <b>LUNES A DOMINGO 8:30HRS a 21:00HRS</b><br><b>INGRESO SÓLO CON RESERVA</b>' },
            { icon: '/icon-restriction.svg', text: 'Pago efectivo o transferencia.<br>No se permiten mascotas.<br>No se puede hacer fogatas.<br>No se admiten motos 2 ruedas.<br>No puede dejar la basura que Ud. genere en su visita al lugar.' },
        ]
    },
];


const Slides = () => {
    const [activeSlide, setActiveSlide] = useState(null);

    const handleViewRouteClick = (index) => {
        setActiveSlide(index);
    };

    const handleBackClick = () => {
        setActiveSlide(null);
    };

    return (
        <section id="rutas" className='max-h-[1000px]'>
            <div className="h-screen hidden md:block">
                <Swiper
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        1024: {
                            slidesPerView: 1.2
                        },
                        1400: {
                            slidesPerView: 1.5
                        }
                    }}
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index} className='h-screen relative max-h-[1000px]' style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover'}}>
                            <div className={`absolute inset-0 bg-black bg-opacity-50 ${activeSlide === index ? 'block' : 'hidden'}`} />
                            <div className='py-10 xl:py-5 w-auto'>
                                <div id={`slide-principal-${index}`} className={`${activeSlide === index ? 'hidden' : 'block'}`}>
                                    <div className="max-w-[1200px] p-10 px-geo">
                                        <p className='uppercase text-white text-[1.2rem] font-semibold'>Rutas</p>
                                        <span className="font-radwave text-white stroke-1px-white leading-10 sm:leading-[60px] text-[1.8rem] sm:text-[2rem] lg:text-[2.2rem]">0{index + 1}.&nbsp;</span>
                                        <span className="font-radwave text-transparent stroke-1px-white leading-10 sm:leading-[60px] text-[1.8rem] sm:text-[2rem] lg:text-[2.2rem]">
                                            {slide.title}
                                        </span>
                                        <p className="text-white font-nunito pt-5">{slide.subtitle}</p>
                                    </div>
                                    <div className='flex px-geo'>
                                        <div className="flex flex-wrap gap-y-5 price-descrip">
                                            {slide.info.map((info, infoIndex) => (
                                                <div className={`flex flex-row basis-1/2 gap-x-5 col-${infoIndex}-${index}`} key={infoIndex}>
                                                    <div className=''>
                                                        <img src={info.icon} alt="" />
                                                    </div>
                                                    <div className='text-white font-nunito' dangerouslySetInnerHTML={{ __html: info.text }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <button className='mx-[3.8rem] mt-10 rounded-full text-white px-4 lg:px-6 flex items-center gap-x-2 py-2 lg:py-2 uppercase text-xs lg:text-xl border border-white' onClick={() => handleViewRouteClick(index)}>
                                        Ver ruta
                                        <svg className="w-[18px] lg:w-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 13L4 11L16 11L10.5 5.50004L11.92 4.08004L19.84 12L11.92 19.92L10.5 18.5L16 13L4 13Z" fill="white" />
                                        </svg>
                                    </button>
                                </div>
                                <div id={`slide-click-${index}`} className={`${activeSlide === index ? 'block' : 'hidden'}`}>
                                    <div className="flex flex-col">
                                        <div className='z-10'>
                                            <div className="max-w-[1000px] px-geo py-10">
                                                <p className='uppercase text-white font-bold text-[1.2rem]'>Rutas</p>
                                                <span className="font-radwave text-white stroke-1px-white leading-10 sm:leading-[60px] text-[1.2rem] sm:text-[2rem] lg:text-[2.2rem]">0{index + 1}.&nbsp;</span>
                                                <span className="font-radwave text-transparent stroke-1px-white leading-10 sm:leading-[60px] text-[1.2rem] sm:text-[2rem] lg:text-[2.2rem]">
                                                    {slide.title}
                                                </span>
                                            </div>
                                        </div>
                                        <div className='z-10 flex justify-between'>
                                            <div className='px-geo'>
                                                <button className='rounded-full text-white px-4 lg:px-6 flex items-center gap-x-2 py-2 lg:py-2 uppercase text-xs lg:text-xl border border-white bg-black bg-opacity-50' onClick={handleBackClick}>
                                                    <svg className="w-[18px] lg:w-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20 11L20 13L8 13L13.5 18.5L12.08 19.92L4.16 12L12.08 4.08002L13.5 5.50002L8 11L20 11Z" fill="white" />
                                                    </svg>
                                                    Volver
                                                </button>
                                            </div>
                                            <div className='absolute right-10 bottom-30 max-w-[60vh]'>
                                                <img src={slide.detailImage} alt="Detalle de la ruta" className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Slides;