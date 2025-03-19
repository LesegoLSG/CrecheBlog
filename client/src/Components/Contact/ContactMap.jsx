import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full h-80 flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1741576517332!6m8!1m7!1sbhzYSdaBZZz-q8ZI_vMovw!2m2!1d-26.25668567439416!2d27.84844997469949!3f282.3347829161884!4f-13.952102299921194!5f0.7820865974627469"
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
