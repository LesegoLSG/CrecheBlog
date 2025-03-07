import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShareButton from "../Components/Reusables/ShareButton";
import Loader from "../Components/Reusables/Loader";
import Comments from "../Components/Comments/Comments";
import PostCard from "../Components/Post/PostCard";

const PostPage = () => {
  const { postSlug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recentPosts, setRecentPosts] = useState(null);

  // Fetch post based on a slug
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        } else {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  console.log("post from post page:", post);

  // Fetch 3 recent posts
  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, [recentPosts]);

  // Dynamically generate the URL based on the post's slug
  const currentURL = `${window.location.origin}/post/${postSlug}`;

  return (
    <section className="min-h-screen p-2 md:p-6 ">
      {/* Post Container */}
      <div className="relative max-w-4xl mx-auto  shadow-lg rounded-lg overflow-hidden ">
        {/* Title and category*/}

        <h1 className="subheading text-center my-8">{post && post.title}</h1>

        <h1 className="absolute top-0 right-0 text-sm uppercase font-bold bg-accent text-white p-1 rounded-bl-lg ">
          {post && post.category}
        </h1>

        {/* Post Image */}
        <div
          className="h-64 md:h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              (post && post?.image) || "https://via.placeholder.com/800x400"
            })`,
          }}
        ></div>

        {/* Post Content */}
        <div className="p-2 md:p-6">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">
              {post && new Date(post.createdAt).toLocaleDateString()}
            </span>
            <span className="text-sm text-gray-400">
              {post && (post.content.length / 1000).toFixed(0)} mins read
            </span>
          </div>

          {/* Content */}
          <div
            className="mt-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post && post.content }}
          ></div>
        </div>
        <div className="relative px-6">
          <ShareButton
            shareUrl={currentURL}
            shareBtnSize={30}
            shareSocialIconsSize={30}
          />
        </div>
      </div>

      {/* Comment Section */}
      <Comments postId={post && post._id} />

      {/* Recent posts */}
      <div className="max-w-4xl mx-auto mt-8  shadow-lg rounded-lg p-2 md:p-6">
        <h1 className="subheading mb-4">Recent Posts</h1>
        <div className="w-full grid grid-col-1 lg:grid-cols-3 gap-2">
          {recentPosts &&
            recentPosts.map((recentPost) => (
              <PostCard key={recentPost._id} post={recentPost} />
            ))}
        </div>
        {/* Call To Action */}
        {/* <div className="w-full my-4">
        <CallToAction />
      </div> */}
      </div>

      {loading && <Loader />}
    </section>
  );
};

export default PostPage;
