import HeroImg from "../images/sliderImg1.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileInView="show"
    >
      <div className="flex items-center w-full md:h-screen h-[100%]">
        <div className="absolute md:z-50 z-0 _textShadowBold text-white flex items-center flex-col pl-[50px]">
          <h2 className="md:text-6xl text-5xl my-4">HoveyRoofing Company</h2>
          <span className="text-2xl md:ml-[75px] ml-2 md:mt-1 mt-4">
            Serving Redlands and surrounding areas since 1988
          </span>
        </div>
      </div>
      <div className="w-full  flex justify-center items-center">
        <img
          src={HeroImg}
          alt=""
          className="absolute top-0 w-full h-screen object-cover z-10"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
