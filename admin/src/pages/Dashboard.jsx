import React from "react";
import { Table } from "../components/Table";
import { SideBar } from "../components/SideBar";
import { Stats } from "../components/Stats";
import { UsersTable } from "../components/UsersTable";
import { ReachOutTable } from "../components/ReachOutTable";
import { LostsTable } from "../components/LostsTable";
import { PartnersTable } from "../components/PartnersTable";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <SideBar />{" "}
        <div className="w-2/3 items-center">
        <Stats />
          {/* <Table /> */}
          <UsersTable />
          <ReachOutTable />
          <LostsTable />
          <PartnersTable />
          </div>
      </div>
    </>
  );
};
