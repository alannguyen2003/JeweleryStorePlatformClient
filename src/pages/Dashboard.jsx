import React from "react";
import SideBar from "../components/SideBar/SideBar";
import Tables from "../components/Tables/Tables";

const Dashboard = () => {
  return (
    <div>
      <SideBar component={<Tables />}></SideBar>
    </div>
  );
};

export default Dashboard;
