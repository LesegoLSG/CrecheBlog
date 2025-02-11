import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashboardSideBar from "../Components/Dashboard/DashboardSideBar";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  // useEffect to trigger when tab changes
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log(tabFromUrl);
  }, [location.search]);

  return (
    <section className="flex-1 w-full">
      <div className="flex">
        <DashboardSideBar />
      </div>
    </section>
  );
};

export default Dashboard;
