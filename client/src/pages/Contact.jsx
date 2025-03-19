import React from "react";
import ContactMap from "../Components/Contact/ContactMap";
import ContactForm from "../Components/Contact/ContactForm";
import ContactDetails from "../Components/Contact/ContactDetails";

const Contact = () => {
  return (
    <section
      className="w-full h-auto bg-background pt-24 flex flex-col gap-y-10"
      id="contact"
    >
      <div className="w-full max-w-7xl mx-auto grid  grid-col-1 lg:grid-cols-2 gap-10">
        <ContactDetails />
        <ContactForm />
      </div>

      <ContactMap />
    </section>
  );
};

export default Contact;
