import React from "react";
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

const ContactDetails = () => {
  return (
    <section className="w-full h-auto flex flex-col gap-4 ">
      <p>Contact us</p>
      <h1 className="heading">Get In Touch</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo
        sunt exercitationem nisi facere, odit, deserunt maiores accusantium
        nihil non quam ullam tempora vel mollitia repellat autem minima
        repellendus velit.
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Call us */}
        <div className="flex items-center gap-4  border border-orange-400 p-4 rounded-xl">
          <FaPhoneVolume size={30} className="text-action" />
          <div className="">
            <h3 className="text-lg font-semibold">Call Us</h3>
            <p>+27 64 037 3089</p>
          </div>
        </div>
        {/* Email Us*/}
        <div className="flex items-center gap-4  border border-orange-400 p-4 rounded-xl">
          <IoIosMailOpen size={30} className="text-action" />
          <div className="">
            <h3 className="text-lg font-semibold">Email Us</h3>
            <p>lesegomhlongo78@gmail.com</p>
          </div>
        </div>
        {/* Website*/}
        <div className="flex items-center gap-4  border border-orange-400 p-4 rounded-xl">
          <CgWebsite size={30} className="text-action" />
          <div className="">
            <h3 className="text-lg font-semibold">Website</h3>
            <p>www.mhlongolesego.com</p>
          </div>
        </div>
        {/* Address*/}
        <div className="flex items-center gap-4  border border-orange-400 p-4 rounded-xl">
          <FaLocationDot size={30} className="text-action" />
          <div className="">
            <h3 className="text-lg font-semibold">Location</h3>
            <p>2235 Diale Street, Soweto</p>
          </div>
        </div>
      </div>
      {/* Social Media */}
      <h3 className="text-lg font-semibold">Follow us on:</h3>
      <div className="flex gap-2">
        <div className="rounded-full bg-action p-2 cursor-pointer hover:scale-110 ">
          <FaWhatsapp className="text-white" size={25} />
        </div>
        <div className="rounded-full bg-action p-2 cursor-pointer hover:scale-110">
          <FaFacebook className="text-white" size={25} />
        </div>
        <div className="rounded-full bg-action p-2 cursor-pointer hover:scale-110">
          <FaTiktok className="text-white" size={25} />
        </div>
        <div className="rounded-full bg-action p-2 cursor-pointer hover:scale-110">
          <FaInstagram className="text-white" size={25} />
        </div>
        <div className="rounded-full bg-action p-2 cursor-pointer hover:scale-110">
          <FaTwitter className="text-white" size={25} />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
