import React, { useEffect } from "react";

const AboutDetailsPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="container h-auto">
      {/* Header Section */}
      <div className="w-full h-[16rem] bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col justify-center items-center gap-4 text-white px-4">
        <h2 className="text-5xl font-extrabold text-center">
          Discover More About Boitumelo Daycare
        </h2>
        <p className="text-xl text-center max-w-3xl">
          A safe, nurturing, and inspiring place where little learners grow
          through love, play, and discovery.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto p-8 space-y-10 text-gray-800">
        {/* Our Story */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-600">Our Story</h3>
          <p className="text-lg mt-4 leading-relaxed">
            At <span className="font-bold">Boitumelo Daycare</span>, we are more
            than just a daycare—we are a family. Our journey began with a vision
            to create a **warm, stimulating, and secure environment** where
            young minds can develop **confidence, creativity, and social
            skills**. We believe every child is unique, and our approach to
            early childhood education nurtures their curiosity and potential.
          </p>
        </div>

        {/* What We Offer */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-600">
            What We Offer
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="text-lg flex items-start gap-2">
              <span className="text-blue-500 font-bold">✔</span>
              <span>
                <span className="font-bold">Safe & Nurturing Environment:</span>{" "}
                A welcoming space where children feel secure and valued.
              </span>
            </li>
            <li className="text-lg flex items-start gap-2">
              <span className="text-blue-500 font-bold">✔</span>
              <span>
                <span className="font-bold">Play-Based Learning:</span> We blend
                fun activities with structured learning to promote development.
              </span>
            </li>
            <li className="text-lg flex items-start gap-2">
              <span className="text-blue-500 font-bold">✔</span>
              <span>
                <span className="font-bold">
                  Qualified & Passionate Educators:
                </span>{" "}
                Experienced teachers who care for each child’s growth.
              </span>
            </li>
            <li className="text-lg flex items-start gap-2">
              <span className="text-blue-500 font-bold">✔</span>
              <span>
                <span className="font-bold">Interactive Learning Spaces:</span>{" "}
                Designed to enhance creativity, motor skills, and social
                interaction.
              </span>
            </li>
            <li className="text-lg flex items-start gap-2">
              <span className="text-blue-500 font-bold">✔</span>
              <span>
                <span className="font-bold">Parental Involvement:</span> We keep
                parents engaged and updated on their child's progress.
              </span>
            </li>
          </ul>
        </div>

        {/* Programs & Activities */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-600">
            Programs & Activities
          </h3>
          <p className="text-lg mt-4 leading-relaxed">
            Our daily schedule is carefully designed to balance **education,
            exploration, and play**. We offer a range of **age-appropriate
            programs** that focus on:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="text-lg flex items-start gap-2">
              <span className="text-blue-500 font-bold">🎨</span>
              <span>
                <span className="font-bold">Creative Arts:</span> Painting,
                crafting, and imaginative play to foster self-expression.
              </span>
            </li>
            <li className="text-lg flex items-start gap-2">
              <span className="text-blue-500 font-bold">📖</span>
              <span>
                <span className="font-bold">Storytelling & Literacy:</span>{" "}
                Daily story sessions to improve language and comprehension
                skills.
              </span>
            </li>
            <li className="text-lg flex items-start gap-2">
              <span className="text-blue-500 font-bold">🎵</span>
              <span>
                <span className="font-bold">Music & Movement:</span> Fun dance
                and rhythm activities that develop coordination.
              </span>
            </li>
            <li className="text-lg flex items-start gap-2">
              <span className="text-blue-500 font-bold">🔬</span>
              <span>
                <span className="font-bold">Early STEM Learning:</span> Simple
                science and math activities to encourage problem-solving skills.
              </span>
            </li>
          </ul>
        </div>

        {/* Parent Testimonials */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-600">
            What Parents Say
          </h3>
          <p className="text-lg mt-4 italic">
            "Boitumelo Daycare has been an absolute blessing for our child. The
            teachers are caring, the activities are engaging, and our little one
            loves going every day! We’ve seen so much growth in confidence and
            learning."
            <span className="block mt-2 font-semibold">
              — Thandi M., Parent
            </span>
          </p>
          <p className="text-lg mt-4 italic">
            "A truly nurturing environment! I feel at peace knowing my child is
            in safe hands, growing and making new friends."
            <span className="block mt-2 font-semibold">— David K., Parent</span>
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-xl font-medium">
            Ready to give your child a **happy, engaging, and enriching** start?
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutDetailsPage;
