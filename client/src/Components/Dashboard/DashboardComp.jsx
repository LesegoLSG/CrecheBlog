import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaRegCommentDots, FaFileAlt } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const DashboardComp = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/user/getusers?limit=5");
        const data = await res.json();
        setUsers(data.users);
        setTotalUsers(data.totalUsers);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getposts?limit=5");
        const data = await res.json();
        setPosts(data.posts);
        setTotalPosts(data.totalPosts);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comment/getcommentslist");

        const data = await res.json();
        console.log("data comments", data);
        setComments(data);
        setTotalComments(data.totalComments);
      } catch (error) {
        console.log(error);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
      fetchPosts();
      fetchComments();
    }
  }, [users, posts, comments]);

  // Sample Data
  // const users = [
  //   { id: 1, name: "John Doe", email: "john@example.com" },
  //   { id: 2, name: "Jane Smith", email: "jane@example.com" },
  // ];
  // const posts = [
  //   { id: 1, title: "First Post", author: "John Doe" },
  //   { id: 2, title: "Second Post", author: "Jane Smith" },
  // ];
  // const comments = [
  //   { id: 1, text: "Nice post!", user: "John Doe" },
  //   { id: 2, text: "Thanks for sharing!", user: "Jane Smith" },
  // ];

  const data = [
    { name: "Jan", users: 20, posts: 10, comments: 30 },
    { name: "Feb", users: 40, posts: 20, comments: 50 },
    { name: "Mar", users: 60, posts: 35, comments: 80 },
    { name: "Apr", users: 80, posts: 50, comments: 110 },

    { name: "May", users: 20, posts: 10, comments: 30 },
    { name: "Jun", users: 40, posts: 20, comments: 50 },
    { name: "Jul", users: 60, posts: 35, comments: 80 },
    { name: "Aug", users: 80, posts: 50, comments: 120 },
    { name: "Sep", users: 20, posts: 10, comments: 30 },
    { name: "Oct", users: 40, posts: 20, comments: 50 },
    { name: "Nov", users: 60, posts: 35, comments: 80 },
    { name: "Dec", users: 80, posts: 50, comments: 110 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <h1 className="heading text-center mb-4"> Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Users */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaUsers className="text-blue-500 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-gray-600 font-semibold text-2xl">
              {users.length}
            </p>
          </div>
        </div>

        {/* Total Posts */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaFileAlt className="text-green-500 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Posts</h2>
            <p className="text-gray-600 font-semibold text-2xl">
              {posts.length}
            </p>
          </div>
        </div>

        {/* Total Comments */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaRegCommentDots className="text-purple-500 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Comments</h2>
            <p className="text-gray-600 font-semibold text-2xl">
              {comments.length}
            </p>
          </div>
        </div>
      </div>
      {/* Graph */}
      <div className="w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          📊 User, Post & Comment Growth
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#1f77b4" name="Users" />
            <Bar dataKey="posts" fill="#2ca02c" name="Posts" />
            <Bar dataKey="comments" fill="#d62728" name="Comments" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Data Lists */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {/* Users List */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-3">👤 Users</h2>
            <button
              className="button p-1"
              onClick={() => navigate("/dashboard?tab=users")}
            >
              <span>View all</span>
            </button>
          </div>

          <ul className="space-y-2">
            {users &&
              users.map((user) => (
                <li key={user.id} className="border-b pb-2">
                  <span className="font-medium">
                    {user.firstName} {user.lastName}
                  </span>{" "}
                  - {user.email}
                </li>
              ))}
          </ul>
        </div>

        {/* Posts List */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="w0full flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-3">📝 Posts</h2>
            <button
              className="button p-1"
              onClick={() => navigate("/dashboard?tab=posts")}
            >
              <span>View all</span>
            </button>
          </div>
          <ul className="space-y-2">
            {posts &&
              posts.map((post) => (
                <li key={post.id} className="border-b pb-2">
                  <span className="font-medium">{post.title}</span> by{" "}
                  {post.author}
                </li>
              ))}
          </ul>
        </div>

        {/* Comments List */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-3">💬 Comments</h2>
            <button
              className="button p-1"
              onClick={() => navigate("/dashboard?tab=comments")}
            >
              <span>View all</span>
            </button>
          </div>
          <ul className="space-y-2">
            {comments &&
              comments.map((comment) => (
                <li key={comment.id} className="border-b pb-2">
                  <span className="">{comment.content}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
