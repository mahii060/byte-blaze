import Hero from "../components/Hero";
import wave from "../assets/wave.svg"
// import star from "../assets/star.svg"

const Home = () => {
    return (
        <div className="flex flex-col  items-center justify-center min-h-[calc(100vh-116px)]">
            <Hero />
            <img className="mt-auto w-full" src={wave} alt="" />
            {/* <img className="absolute bottom-0 w-full" src={star} alt="" /> */}
        </div>
    );
};

export default Home;