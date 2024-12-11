import { CgPlayButtonO } from "react-icons/cg";
import MeetTheCast from "./MeetTheCast";
import { asset } from "../../utils/asset";

const Hero = () => {
    return (
        <div className="md:min-h-screen relative bg-cover bg-right md:bg-center" style={{ backgroundImage: `url(${asset("images/hero-background.png")})` }}>
            {/* Semi-transparent black overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />
            {/*Circle Gradient - Top*/}
            <div className="absolute bg-[#2A3E84] rounded-full p-30 blur-3xl -top-30 -right-30 z-0" />
            {/* Main content */}
            <div className="relative z-5">

                <div className="w-11/12 mx-auto">
                    
                    {/*Title Image*/}
                    <div className='flex justify-center'>
                        <img src={asset("icons/title-logo.png")} alt="Ricky and Morty" className='w-[134px] md:w-[227px] h-[28px] md:h-[48px] mt-1.5 md:mt-3' />
                    </div>
                    
                    {/*Title Text*/}
                    <div className="relative w-11/12 md:w-10/12 mx-auto my-5">
                        {/*Top Corner Bubble*/}
                        <div className="absolute -top-4 md:-top-22 -left-6 md:-left-2.5 -z-1">
                            <img src={asset("images/bubble.png")} className="w-[52px] md:w-[215px] h-[52px] md:h-[215px]" />
                        </div>

                        <div className="flex flex-col items-start md:items-center justify-center">
                            {/* First Line: The + image + Rick & */}
                            <div className="flex items-center justify-center">
                                <h1 className="text-4xl md:text-9xl italic uppercase font-bold text-white">The</h1>
                                <img src={asset("images/portal.png")} alt="Portal" className="w-[69px] md:w-[225px] h-[44px] md:h-[145px]" />
                                <h1 className="text-4xl md:text-9xl italic uppercase font-bold bg-linear-to-r from-secondary to-primary text-transparent bg-clip-text">Rick &</h1>
                            </div>

                            {/* Second Line: Morty Wiki */}
                            <div className="flex items-center justify-center gap-4">
                                <h1 className="text-4xl md:text-9xl italic uppercase font-bold bg-linear-to-r from-secondary to-primary text-transparent bg-clip-text">Morty</h1>
                                <h1 className="text-4xl md:text-9xl italic uppercase font-bold text-white">Wiki</h1>
                            </div>
                        </div>
                        
                        {/*Button and Description*/}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-center mt-4 gap-8 md:gap-16">
                            <button className="btn bg-linear-to-r from-primary to-secondary rounded-full py-2.5 px-4 flex justify-center items-center gap-2 border-0 text-white"><CgPlayButtonO size={20} />Watch Now</button>
                            <p className="text-secondary text-sm">
                                Brilliant but boozy scientist Rick hijacks his fretful <br />
                                teenage grandson, Morty, for wild escapades <br />
                                in other worlds and alternate dimensions.
                            </p>
                        </div>
                        
                        {/*Portal Gun*/}
                        <div className="absolute top-15 md:top-34 -right-8 md:-right-36 -z-1">
                            <div className="relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-3/5 -translate-y-1/2 rotate-[25deg] w-[64px] md:w-30 h-[106px] md:h-60 bg-linear-to-t from-secondary to-primary rounded-[72px]" />
                                <img src={asset("images/portal-gun.png")} className="relative w-[120px] md:w-[280px] h-[67px] md:h-[160px]" alt="Portal Gun" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Meet the Cast */}
                <MeetTheCast />
            </div>
        </div>
    );
};

export default Hero;