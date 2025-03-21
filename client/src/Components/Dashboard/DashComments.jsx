import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import ConfirmationModal from "../Reusables/ConfirmationModal";
import Loader from "../Reusables/Loader";

const DashComments = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  //   Get all comments
  useEffect(() => {
    if (currentUser && currentUser.isAdmin) {
      const fetchComments = async () => {
        try {
          setIsLoading(true);
          const res = await fetch(`/api/comment/getcommentslist`);
          const data = await res.json();
          console.log("Data", data);
          if (res.ok) {
            setComments(data);
            console.log("comments useEffect:", comments);
            if (data && data.length < 9) {
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
        fetchComments();
      }
    }
  }, [currentUser._id]);

  //   Show button functionality
  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      setIsLoading(true);
      const res = await fetch(
        `/api/post/getposts?/userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) => [...prev, ...data.comments]);
        if (data.comments.length < 9) {
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
    setCommentIdToDelete(id);
  };

  // Cancel delete
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  //   Delete user functionality
  const handleConfirmDelete = async (e) => {
    e.preventDefault();

    // setShowDeleteModal(false);
    if (!currentUser) return;

    try {
      const res = await fetch(
        `/api/comment/deletecomment/${commentIdToDelete}`,
        {
          method: "DELETE",
        }
      );
      console.log();
      const data = await res.json();
      if (res.ok) {
        setComments((prev) =>
          prev.filter((comments) => comments._id !== commentIdToDelete)
        );
        setShowDeleteModal(false);
      } else {
        console.log("Error deleting a post:", data.message);
        setShowDeleteModal(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setShowDeleteModal(false);
    }
  };

  return (
    <section className="min-h-screen container mx-auto p-4">
      <h1 className="heading text-center ">Comments</h1>
      <div className="p-4 max-w-full  overflow-x-auto">
        {currentUser.isAdmin && comments && comments.length > 0 ? (
          <>
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-accent text-white">
                <tr className="">
                  <th className="border border-gray-200 p-2">Date created</th>
                  <th className="border border-gray-200 p-2">
                    Comment Content
                  </th>
                  <th className="border border-gray-200 p-2">NO of likes</th>
                  <th className="border border-gray-200 p-2">User ID </th>
                  <th className="border border-gray-200 p-2">Post ID</th>

                  <th className="border border-gray-200 p-2">Delete</th>
                </tr>
              </thead>
              <tbody className="border-x ">
                {comments.map((comment) => (
                  <tr key={comment._id} className="text-center">
                    {/* Date */}
                    <td className="border-b p-2  font-semibold">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </td>

                    {/* Content */}
                    <td className="text-start border-b p-2">
                      {comment.content}
                    </td>
                    {/* No Of likes */}
                    <td className="border-b p-2">{comment.numberOfLikes}</td>
                    {/* User ID */}
                    <td className="border-b p-2">{comment.userId}</td>
                    {/* Post ID*/}
                    <td className="border-b p-2">{comment.postId}</td>
                    {/* Delete */}
                    <td className="border-b p-2">
                      <div className="flex justify-center items-center">
                        <MdDelete
                          className="text-red-600 hover:underline cursor-pointer"
                          onClick={() => handleOpenDeleteModal(comment._id)}
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
          <p>No comments to display yet...</p>
        )}
      </div>
      {showDeleteModal && (
        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
          message="Are you sure you want to delete this comment?"
        />
      )}
      {isLoading && <Loader />}
    </section>
  );
};

export default DashComments;
