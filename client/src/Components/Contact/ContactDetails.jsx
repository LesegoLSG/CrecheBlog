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
      <div>
        <h3 className="subheading">Contact us</h3>
        <h1 className="heading">Get In Touch</h1>
      </div>

      <p>
        Have any questions or need assistance? We're here to help! Whether you
        want to inquire about our services, collaborate, or simply say hello,
        feel free to reach out. Connect with us through a call, email, or our
        social media platforms—we’d love to hear from you!
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Call us */}
        <div className="flex items-center gap-4  border border-accent p-4 rounded-xl">
          <FaPhoneVolume size={25} className="text-accent" />
          <div className="">
            <h3 className="text-lg font-semibold">Call Us</h3>
            <p>+27 64 037 3089</p>
          </div>
        </div>
        {/* Email Us*/}
        <div className="flex items-center gap-4  border border-accent p-4 rounded-xl">
          <IoIosMailOpen size={25} className="text-accent" />
          <div className="">
            <h3 className="text-lg font-semibold">Email Us</h3>
            <p>lesegomhlongo78@gmail.com</p>
          </div>
        </div>
        {/* Website*/}
        <div className="flex items-center gap-4  border border-accent p-4 rounded-xl">
          <CgWebsite size={25} className="text-accent" />
          <div className="">
            <h3 className="text-lg font-semibold">Website</h3>
            <p>www.mhlongolesego.com</p>
          </div>
        </div>
        {/* Address*/}
        <div className="flex items-center gap-4  border border-accent p-4 rounded-xl">
          <FaLocationDot size={25} className="text-accent" />
          <div className="">
            <h3 className="text-lg font-semibold">Location</h3>
            <p>2235 Diale Street, Soweto</p>
          </div>
        </div>
      </div>
      {/* Social Media */}
      <h3 className="subheading">Follow us on:</h3>
      <div className="flex gap-3">
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
      </div>
    </section>
  );
};

export default ContactDetails;
