import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import ShareButton from "../Reusables/ShareButton";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  // Dynamically generate the URL based on the post's slug
  const currentURL = `${window.location.origin}/post/${post.slug}`;

  return (
    <div className="relative  rounded-lg shadow-lg overflow-hidden w-80">
      {/* Image Section */}
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0  bg-accent bg-opacity-70 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold uppercase">
          {post.category}
        </div>
      </div>
      <div className="flex justify-end items-center p-2">
        <p className="text-xs text-gray-400 font-semibold">
          {moment.utc(post.createdAt).local().fromNow()}
        </p>
      </div>

      {/* Content Section */}
      <div className="px-2">
        <h2 className="text-[0.95rem] line-clamp-3">{post.title}</h2>
        <div className="flex justify-between items-center">
          <ShareButton
            shareUrl={currentURL}
            shareBtnSize={20}
            shareSocialIconsSize={24}
          />
          <span
            className="text-action  cursor-pointer underline hover:no-underline"
            onClick={() => navigate(`/post/${post.slug}`)}
          >
            Read More
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
