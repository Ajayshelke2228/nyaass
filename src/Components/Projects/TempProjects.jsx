import React from "react";
import { useNavigate } from "react-router-dom";

export default function TempProjects() {
  const navigate = useNavigate();
  const style = {
    height: "9vh",
    width: "9vh",
  };
  const imageStyle = {
    width: "35%",
    backgroundColor: "gray",
    alignSelf: "center",
    marginTop: "5%",
  };
  return (
    <>
      <div className="dark text-center mb-5">
        <h1>
          <img src="/Projects.png" alt="" style={style}></img> PROJECTS
        </h1>
      </div>
      <div className=" row mb-5 d-flex align-items-end ">
        <div className="col-md-4 col-sm-12 dFlexVertical">
          <img
            className="circular-Img"
            src="/logos/Pustak Pedhi.png"
            alt="Img"
            style={imageStyle}
          ></img>
          <div className="mt-4 justify">
            <div className="subtitle mb-2">Pustak pedhi</div>
            The initiative of 'Pustak Pedhi' is not just meant for the child
            reading it, but it also inculcates a habit of reading amongst their
            siblings, their parents, their friends, and all their social group.
          </div>
        </div>
        <div className="col-md-4 col-sm-12 dFlexVertical">
          <img
            className="circular-Img"
            src="/logos/IDP.png"
            alt="Img"
            style={imageStyle}
          ></img>
          <div className="mt-4 justify">
            <div className="subtitle mb-2">IDP</div>
            IDP seeks to develop whole person i.e- Mind , body, heart and
            spirit. IDP searches out talents in each student and each staff
            member, and provides opportunities for using and nurturing those
            talents.
          </div>
        </div>
        <div className="col-md-4 col-sm-12 dFlexVertical">
          <img
            className="circular-Img"
            src="/logos/Be a Mentor.png"
            alt="Img"
            style={imageStyle}
          ></img>
          <div className="mt-4 justify">
            <div className="subtitle mb-2">Be a Mentor</div>
            The goal of self-managed mutual learning and the need for mentoring
            is encouraged within the relationship as well as the desire for
            development in support of organizational goals.
          </div>
        </div>
      </div>
      <div className="dFlex-center m-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/Projects")}
        >
          Read More
        </button>
      </div>
    </>
  );
}
