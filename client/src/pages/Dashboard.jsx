import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashboardSideBar from "../Components/Dashboard/DashboardSideBar";
import DashComments from "../Components/Dashboard/DashComments";
import DashProfile from "../Components/Dashboard/DashProfile";
import DashUsers from "../Components/Dashboard/DashUsers";
import DashPosts from "../Components/Dashboard/DashPosts";
import DashboardComp from "../Components/Dashboard/DashboardComp";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  // useEffect to trigger when tab changes
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <section className="flex w-full">
      <div className="flex">
        <DashboardSideBar />
      </div>
      {/* Pages */}
      <div className="flex-1 ">
        {tab === "dashboard" && <DashboardComp />}
        {tab === "profile" && <DashProfile />}
        {tab === "posts" && <DashPosts />}
        {tab === "users" && <DashUsers />}
        {tab === "comments" && <DashComments />}
      </div>
    </section>
  );
};

export default Dashboard;
