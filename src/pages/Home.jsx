import Episodes from "../components/Home/Episodes";
import Hero from "../components/Home/Hero";
import Locations from "../components/Home/Locations";
import { asset } from "../utils/asset";

const Home = () => {
    return (
        <section>
            <Hero />
            <div className="pt-5 md:pt-10 relative overflow-hidden">
                {/* Background image */}
                <div className="absolute right-0 top-0 h-full w-1/3 md:w-full bg-no-repeat bg-right bg-contain"
                    style={{ backgroundImage: `url(${asset("images/spiral-element.png")})` }} />
                {/*Circle Gradient - Bottom*/}
                <div className="absolute bg-[#2A3E84] rounded-full p-30 blur-3xl -bottom-30 -left-30" />
                {/* Main content */}
                <div className="relative space-y-8 md:space-y-24 z-5">
                    <Episodes />
                    <Locations />
                </div>
            </div>
        </section>
    );
};

export default Home;