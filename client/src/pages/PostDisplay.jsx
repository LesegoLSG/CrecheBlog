import React from "react";

const PostDisplay = () => {
  return (
    <section
      className="bg-gradient-to-t from-background to-white container min-h-screen px-4"
      id="team"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="">
          <h3 className="subheading">Stay Updated</h3>
          <h1 className="heading">
            Discover the Latest Tips & Trends in Childcare and Parenting
          </h1>
        </div>

        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3  gap-6"></div>
      </div>
    </section>
  );
};

export default PostDisplay;
