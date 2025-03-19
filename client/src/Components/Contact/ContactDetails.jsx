import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import {
  leftToRightVariants,
  rightToLeftVariants,
  bottomToTopVariants,
} from "../Reusables/MotionVariants";

const ContactDetails = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="w-full h-auto flex flex-col gap-4 p-4" ref={ref}>
      <div>
        <h3 className="subheading">Contact us</h3>
        <h1 className="heading">Get In Touch</h1>
      </div>

      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={leftToRightVariants}
      >
        Have any questions or need assistance? We're here to help! Whether you
        want to inquire about our services, collaborate, or simply say hello,
        feel free to reach out. Connect with us through a call, email, or our
        social media platforms—we’d love to hear from you!
      </motion.p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Call us */}
        <motion.div
          className="flex items-center gap-4  border border-accent p-4 rounded-xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={leftToRightVariants}
        >
          <FaPhoneVolume size={25} className="text-accent" />
          <div className="">
            <h3 className="text-lg font-semibold">Call Us</h3>
            <p>+27 64 037 3089</p>
          </div>
        </motion.div>
        {/* Email Us*/}
        <motion.div
          className="flex items-center gap-4  border border-accent p-4 rounded-xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={rightToLeftVariants}
        >
          <IoIosMailOpen size={25} className="text-accent" />
          <div className="">
            <h3 className="text-lg font-semibold">Email Us</h3>
            <p>lesegomhlongo78@gmail.com</p>
          </div>
        </motion.div>
        {/* Website*/}
        <motion.div
          className="flex items-center gap-4  border border-accent p-4 rounded-xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={leftToRightVariants}
        >
          <CgWebsite size={25} className="text-accent" />
          <div className="">
            <h3 className="text-lg font-semibold">Website</h3>
            <p>www.mhlongolesego.com</p>
          </div>
        </motion.div>
        {/* Address*/}
        <motion.div
          className="flex items-center gap-4  border border-accent p-4 rounded-xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={rightToLeftVariants}
        >
          <FaLocationDot size={25} className="text-accent" />
          <div className="">
            <h3 className="text-lg font-semibold">Location</h3>
            <p>2235 Diale Street, Soweto</p>
          </div>
        </motion.div>
      </div>
      {/* Social Media */}
      <h3 className="subheading">Follow us on:</h3>
      <motion.div
        className="flex gap-3"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={bottomToTopVariants}
      >
        {[
          { icon: FaWhatsapp },
          { icon: FaFacebook },
          { icon: FaTiktok },
          { icon: FaInstagram },
          { icon: FaTwitter },
        ].map((social, index) => (
          <div
            key={index}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-action cursor-pointer hover:scale-110"
          >
            <social.icon className="text-white" size={20} />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactDetails;
