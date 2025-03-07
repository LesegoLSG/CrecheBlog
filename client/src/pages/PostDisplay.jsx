import React, { useEffect, useState } from "react";
import PostCard from "../Components/Post/PostCard";

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
      className="w-full bg-gradient-to-t from-background to-white  min-h-screen px-4"
      id="team"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="">
          <h3 className="subheading">Stay Updated</h3>
          <h1 className="heading">
            Discover the Latest Tips & Trends in Childcare and Parenting
          </h1>
        </div>

        {posts && posts.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
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
