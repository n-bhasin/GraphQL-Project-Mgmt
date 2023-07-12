import React from "react";
import { AddClientModal, AddProjectModal, Clients } from "../components";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};
