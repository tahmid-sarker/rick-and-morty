import { use } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router';
import { asset } from "../utils/asset";

const Cast = () => {
    const { characters } = use(DataContext);
    const navigate = useNavigate();
    return (
        <section className='bg-cover bg-right md:bg-center relative overflow-hidden' style={{ backgroundImage: `url(${asset("images/hero-background.png")})` }}>
            {/* Semi-transparent black overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />
            {/*Circle Gradient - Top*/}
            <div className="absolute bg-[#2A3E84] rounded-full p-30 blur-3xl top-1/2 -right-30 z-0" />
            {/*Circle Gradient - Bottom*/}
            <div className="absolute bg-[#2A3E84] rounded-full p-30 blur-3xl -bottom-30 -left-30" />
            {/* Main content */}
            <div className='w-11/12 mx-auto pb-5 relative z-5'>

                {/*Title Image*/}
                <div className='flex justify-center'>
                    <img src={asset("icons/title-logo.png")} alt="Ricky and Morty" className='w-[134px] md:w-[227px] h-[28px] md:h-[48px] mt-1.5 md:mt-3' />
                </div>

                {/*Title Text*/}
                <h1 className='text-base md:text-6xl text-secondary mb-2.5 md:mb-5'>The Cast</h1>

                {/* Cards */}
                <div className='flex justify-center'>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-5">
                        {characters.map((character, index) => (
                            <div key={index} onClick={() => navigate(`/cast-details/${character.id}`)} className='border p-2 mt:p-4 border-primary w-32 md:w-64 rounded-br-4xl cursor-pointer'>
                                <img src={character.image} alt={character.name} className='w-full h-auto' />
                                <p className='text-[10px] md:text-sm text-white mt-2 truncate'>{character.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cast;