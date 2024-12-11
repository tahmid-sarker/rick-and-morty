import { use } from 'react';
import { DataContext } from '../../context/DataContext';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

const MeetTheCast = () => {
    const { characters } = use(DataContext);
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    return (
        <div className='w-11/12 mx-auto pb-7'>
            <div className='w-11/12 mx-auto flex justify-between items-center mb-9'>
                <h1 className='text-lg md:text-2xl text-white'>Meet The Cast</h1>
                <button className='btn btn-ghost border-primary text-white' onClick={() => navigate('/cast')}>View All</button>
            </div>

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
                    {characters.map((character, index) => (
                        <SwiperSlide key={index} onClick={() => navigate(`/cast-details/${character.id}`)} className='border p-2 mt:p-4 border-primary w-16 h-16 cursor-pointer rounded-br-2xl md:rounded-br-4xl'>
                                <img src={character.image} alt={character.name} className='w-full h-full' />
                                <p className='text-[10px] md:text-sm text-white mt-2 truncate'>{character.name}</p>
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

export default MeetTheCast;
