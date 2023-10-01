import React from "react";
import AboutImg from "../images/aboutImg.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="2xl:h-screen h-[100%] pb-[250px] md:pt-5 pt-[850px]"
      id="about"
    >
      <div className="flex 2xl:flex-row flex-col justify-center text-onyx">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="2xl:w-1/2 w-3/4 2xl:px-[150px] md:pl-[25px] sm:px-1 ml-5 2xl:text-lg sm:text-2xl"
        >
          <h2 className="text-black font-bold 2xl:text-4xl sm:text-5xl 2xl:my-5 lg:mt-5 sm:mt-[200px]">
            About Hovey Roofing
          </h2>
          <p>
            Hovey Roofing was established in 1988. Owner Glen Hovey has been in
            the roofing industry since 1979. Our employees take pride in every
            step of the project from installation to clean up.
          </p>
          <br />
          <p>
            We enjoy doing unique projects, as well as standard applications. We
            treat every house as if it's our own, and focus on the small details
            that make every project excellent.
          </p>
          <button className="bg-test text-white p-2 my-5">
            <a href="https://www.yelp.com/biz/hovey-roofing-redlands">
              Find us on Yelp!
            </a>
          </button>
        </motion.div>
        <div className="2xl:m-0 sm:ml-[50px] p-5">
          <motion.img
            src={AboutImg}
            alt=""
            initial={{
              x: 400,
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="universal-img"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
