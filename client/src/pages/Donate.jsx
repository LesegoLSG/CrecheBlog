import React from "react";

const Donate = () => {
  return (
    <section className="w-full h-auto">
      {/* Heading */}
      <div className="w-full h-[20rem] bg-accent text-white flex flex-col justify-center items-center gap-4">
        <h2 className="heading text-white">Make a Difference Today</h2>
        <p className="text-xl text-center">
          Your generosity helps us create a nurturing and inspiring environment
          where children thrive. Every donation brings joy, education, and a
          brighter future.
        </p>
      </div>

      {/* Donation Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h3 className="text-3xl font-semibold text-primary">Why Donate?</h3>
        <p className="text-start text-lg mt-4 text-gray-700">
          Your support enables us to provide high-quality education, nutritious
          meals, and engaging activities for our little learners. Together, we
          can shape a brighter tomorrow.
          <br />
          We rely on donations from generous individuals and businesses in order
          to continue doing what we do best. Help us build the next generation
          of thriving children in South Africa. We welcome financial
          contributions, in-kind donations, volunteering, and long-term
          partnerships. Please contact us for more information about how you can
          get involved. Nanga Vhutshilo is also a Level 1 BBBEE-complying
          organization, meaning that businesses may earn substantial BBBEE
          scorecard points either by donating funds to us or by partnering with
          us for skills training.
        </p>

        {/* Impact Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6  rounded-lg shadow-lg shadow-accent">
            <h4 className="text-2xl font-bold text-primary">Education</h4>
            <p className="text-gray-600 mt-2">
              Your donation helps us provide quality learning materials and
              resources for every child.
            </p>
          </div>
          <div className="p-6  rounded-lg shadow-lg shadow-accent">
            <h4 className="text-2xl font-bold text-primary">Nutrition</h4>
            <p className="text-gray-600 mt-2">
              Every child deserves a healthy meal. Your support ensures they get
              the nourishment they need.
            </p>
          </div>
          <div className="p-6  rounded-lg shadow-lg shadow-accent">
            <h4 className="text-2xl font-bold text-primary">Play & Growth</h4>
            <p className="text-gray-600 mt-2">
              Donations fund playgrounds, creative activities, and safe
              environments for children to explore.
            </p>
          </div>
        </div>
        {/* How to Contribute Section */}
        <div className="w-full py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-semibold text-primary">
              How to Contribute
            </h3>
            <p className="text-lg mt-4 text-gray-700">
              You can support us through secure online payments or direct bank
              transfers. Below are the banking details for donations via EFT:
            </p>
          </div>

          {/* Banking Details */}
          <div className="mt-6 bg-white shadow-lg shadow-accent rounded-lg p-6 text-left ">
            <h4 className="text-xl font-bold text-primary mb-3">
              Banking Details (South Africa)
            </h4>
            <p className="text-gray-700">
              <strong>Bank Name:</strong> First National Bank (FNB)
            </p>
            <p className="text-gray-700">
              <strong>Account Name:</strong> Mamoriti Foundation
            </p>
            <p className="text-gray-700">
              <strong>Account Number:</strong> 123 456 789
            </p>
            <p className="text-gray-700">
              <strong>Branch Code:</strong> 250655
            </p>
            <p className="text-gray-700">
              <strong>SWIFT Code:</strong> FIRNZAJJ
            </p>
            <p className="text-gray-700 mt-4">
              Kindly use your full name as the reference when making a deposit.
              Thank you for your support!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
