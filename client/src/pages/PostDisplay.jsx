import React, { useEffect, useState } from "react";
import PostCard from "../Components/Post/PostCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import scooter from "../assets/BlogImages/scooter.png";
import nationalpark from "../assets/BlogImages/nationalpark.png";
import jump from "../assets/BlogImages/jump.png";
import playing from "../assets/BlogImages/playing.png";

const PostItem = ({ post, index }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      key={post.id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full lg:w-[300px]"
    >
      <PostCard post={post} />
    </motion.div>
  );
};

const PostDisplay = () => {
  const [posts, setPosts] = useState([]);
  // Fetch latest posts
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts?limit=6");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <section
      className="relative w-full bg-gradient-to-t from-background to-white  min-h-screen px-4 py-24"
      id="team"
    >
      {/* Background Images with Responsive Sizing */}
      <img
        src={scooter}
        alt="scooter"
        className="absolute bottom-1/2 left-4 sm:left-12 max-w-[100px] sm:max-w-[128px] opacity-40 sm:opacity-40"
      />
      <img
        src={nationalpark}
        alt="nationalpark"
        className="absolute top-4 right-8 sm:right-24 max-w-[100px] sm:max-w-[128px] opacity-40 sm:opacity-30 "
      />
      <img
        src={jump}
        alt="jump"
        className="absolute bottom-4 left-4 max-w-[100px] sm:max-w-[128px] opacity-40 sm:opacity-30 "
      />
      <img
        src={playing}
        alt="playing"
        className="absolute bottom-8 right-4 sm:right-12 max-w-[100px] sm:max-w-[128px] opacity-40 sm:opacity-30"
      />

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="">
          <h3 className="subheading">Stay Updated</h3>
          <h1 className="heading">
            Discover the Latest Tips & Trends in Childcare and Parenting
          </h1>
        </div>

        {posts && posts.length > 0 ? (
          <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4 lg:gap-20">
            {posts.map((post, index) => (
              <PostItem key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="w-full flex justify-center items-center">
            <p>
              Our system is currently under maintainance, please try again
              later.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostDisplay;
