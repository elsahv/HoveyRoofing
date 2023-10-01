import React from "react";
import ContactImg from "../images/contactImg.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className=" h-screen flex 2xl:flex-row flex-col justify-center items-center "
    >
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
        className="mr-5 md:p-5 p-1"
      >
        <ul id="contact" className="text-onyx md:text-4xl text-2xl pl-5">
          <li className="text-black font-bold md:text-5xl text-3xl pb-5">
            Contact HoveyRoofing
          </li>
          <li className="">Office: 909-798-0807</li>
          <li className="">Cell: 951-218-6090</li>
          <li className="">Email: hoveyroofing@aol.com</li>
        </ul>
      </motion.div>
      <motion.div className="my-10 drop-shadow-lg p-5">
        <motion.img
          initial={{
            x: 400,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={ContactImg}
          alt=""
          className="universal-img "
        />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
