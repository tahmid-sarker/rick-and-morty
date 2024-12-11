import { use } from "react";
import { DataContext } from "../../context/DataContext";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

const Locations = () => {
    const { locations } = use(DataContext)
    const swiperRef = useRef(null);
    return (
            <div className="w-10/12 mx-auto pb-5">
                <h1 className='text-lg md:text-2xl text-white mb-5 md:mb-9'>Locations</h1>
                <div className='flex justify-center items-center gap-2 md:gap-4'>
                    {/*Left Arrow Button*/}
                    <button onClick={() => swiperRef.current?.slidePrev()}>
                        <IoIosArrowDropleft className='cursor-pointer bg-white text-primary rounded-full w-8 md:w-12.5 h-8 md:h-12.5' />
                    </button>

                    <Swiper modules={[Navigation]} breakpoints={{
                        320: {// small screens
                            spaceBetween: 16,
                            slidesPerView: 2,
                        },
                        768: {// large screens
                            spaceBetween: 32,
                            slidesPerView: 5,
                        },
                    }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}>
                        {locations.map((location, index) => (
                            <SwiperSlide key={index} className='border p-2 mt:p-4 border-primary w-16 h-16 rounded-br-2xl md:rounded-br-4xl'>
                                <p className='text-[10px] md:text-sm text-white mt-2 truncate'>#{location.id}</p>
                                <p className='text-[10px] md:text-sm text-white mt-2 truncate'>{location.name}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/*Right Arrow Button*/}
                    <button onClick={() => swiperRef.current?.slideNext()}>
                        <IoIosArrowDropright className='cursor-pointer bg-white text-primary rounded-full w-8 md:w-12.5 h-8 md:h-12.5' />
                    </button>
                </div>
            </div>
    );
};

export default Locations;