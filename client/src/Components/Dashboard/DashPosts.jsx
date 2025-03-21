import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import NoData from "../Reusables/displays/NoData";
// import ConfirmationBox from "../Reusables/displays/ConfirmationBox";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ConfirmationModal from "../Reusables/ConfirmationModal";
import Loader from "../Reusables/Loader";

const DashPosts = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // Fetch posts when page loads
  useEffect(() => {
    if (currentUser && currentUser.isAdmin) {
      const fetchPosts = async () => {
        try {
          setIsLoading(true);
          const res = await fetch(`/api/post/getposts`);
          const data = await res.json();
          console.log("data:", data);
          if (res.ok) {
            console.log("data.posts", data.posts);
            setUserPosts(data.posts);
            if (data.posts.length < 9) {
              setShowMore(false);
            }
            setIsLoading(false);
          }
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      };
      if (currentUser.isAdmin) {
        fetchPosts();
      }
    }
  }, [currentUser._id]);
  console.log("Posts:", userPosts);

  // Show more posts
  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      setIsLoading(true);
      const res = await fetch(
        `/api/post/getposts?/userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  // Open delete modal
  const handleOpenDeleteModal = (id) => {
    setShowDeleteModal(true);
    setPostIdToDelete(id);
  };

  // Delete functionality
  const handleConfirmDelete = async (e) => {
    e.preventDefault();

    setShowDeleteModal(false);
    if (!currentUser) return;

    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      } else {
        console.log("Error deleting a post:", data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setShowDeleteModal(false);
    }
  };

  // Close delete modal
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <section className={`min-h-screen p-4`}>
      <h1 className="heading text-center">Posts</h1>
      <div className="p-4 max-w-full  overflow-x-auto">
        {currentUser.isAdmin && userPosts.length > 0 ? (
          <>
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-accent text-white">
                <tr className="text-left">
                  <th className="p-3 border border-gray-300">Date Published</th>
                  <th className="p-3 border border-gray-300">Post Image</th>
                  <th className="p-3 border border-gray-300">Post Title</th>
                  <th className="p-3 border border-gray-300">Category</th>
                  <th className="p-3 border border-gray-300">Edit</th>
                  <th className="p-3 border border-gray-300">Delete</th>
                </tr>
              </thead>
              <tbody className={`border-x `}>
                {userPosts &&
                  userPosts.map((post) => (
                    <tr key={post._id} className="text-center">
                      <td className={`border-b  font-semibold `}>
                        {new Date(post.createdAt).toLocaleDateString()}
                      </td>
                      <td className={`border-b  `}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover mx-auto"
                        />
                      </td>
                      <td className={`border-b  `}>
                        <Link to={`/post/${post.slug}`}>{post.title}</Link>
                      </td>
                      <td className={`border-b  `}>{post.category}</td>
                      <td className={`border-b  `}>
                        <div className="flex justify-center items-center">
                          <Link to={`/update-post/${post._id}`}>
                            <FaEdit size={20} className="text-green-600" />
                          </Link>
                        </div>
                      </td>
                      <td className={`border-b  `}>
                        <div className="flex justify-center items-center">
                          <MdDelete
                            className="text-red-600 hover:underline cursor-pointer"
                            onClick={() => handleOpenDeleteModal(post._id)}
                            size={20}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {showMore && (
              <div className="w-full flex justify-end items-center text-sm text-teal-600 my-2">
                <span className="cursor-pointer" onClick={handleShowMore}>
                  Show More
                </span>
              </div>
            )}
          </>
        ) : (
          // <NoData message="No post to display yet..." />
          <p>No Data to display</p>
        )}
      </div>
      {showDeleteModal && (
        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
          message="Are you sure you want to delete this post?"
        />
      )}
      {isLoading && <Loader />}
    </section>
  );
};

export default DashPosts;
