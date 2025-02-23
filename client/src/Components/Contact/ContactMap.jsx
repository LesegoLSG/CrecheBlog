import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full h-80 flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1740121838281!6m8!1m7!1s2s6eeKhrZ7AHrvx6GxpUpg!2m2!1d-26.26766334066562!2d27.87095471427031!3f15.190822368654377!4f-0.8306048678670805!5f0.7820865974627469"
        className="w-full h-80"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
